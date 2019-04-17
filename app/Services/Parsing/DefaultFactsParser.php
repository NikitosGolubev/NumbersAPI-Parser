<?php

namespace App\Services\Parsing;

use App\Services\Parsing\Parser;
use GuzzleHttp\Client;

/**
 * Defines default parsing approach for Facts & Numbers
 * @package App\Services\Parsing
 */
class DefaultFactsParser extends Parser
{
    /**
     * @see parent::parse()
     */
    public function parse($data)
    {
        return $this->multiWork($data);
    }

    /**
     * Prepares array with request promises for parsing.
     * @param array $data [['category' => $category, 'number' => $number], ...] expected
     * @return array
     */
    protected function formDataForParsing($data): array
    {
        $client = new Client([
            'base_uri' => 'http://numbersapi.com/',
            'query' => ['json' => '1']
        ]);
        $promises = [];

        foreach ($data as $request_data) {
            // http://numbersapi.com/777/category
            $uri = $request_data['number']."/".$request_data['category'];
            $promises[] = $client->getAsync($uri);
        }

        return $promises;
    }
}