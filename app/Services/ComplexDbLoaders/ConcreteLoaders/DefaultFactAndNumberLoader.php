<?php

namespace App\Services\ComplexDbLoaders\ConcreteLoaders;

use App\Services\ComplexDbLoaders\DbLoader;
use App\Services\ComplexDbLoaders\Reportable;
use App\Number;
use App\Category;
use App\Fact;
use App\Services\Configs\Concrete\Parsing\ParseConfig;

/**
 * Decides whether parsed fact and number may be inserted to DB or not.
 * @package App\Services\ComplexDbLoaders\ConcreteLoaders
 * @uses Number
 * @uses Category
 * @uses Fact
 * @uses ParseConfig
 */
class DefaultFactAndNumberLoader implements DbLoader, Reportable
{
    /**
     * Trying to insert fact in the DB and if it's needed number as well.
     * @param $parsed_fact
     * @return array
     */
    public function load($parsed_fact)
    {
        if (!$parsed_fact->found) {
            return $this->reportNotFound($parsed_fact);
        }

        $is_number_exists = Number::where('number', $parsed_fact->number)->exists();
        if (!$is_number_exists) {
            Number::create(['number' => $parsed_fact->number]);
            $this->insertFact($parsed_fact);
            return $this->reportSuccess($parsed_fact);
        }

        $md5_fact = md5($parsed_fact->text);
        // looking for similar md5 hash which would sign whether parsed fact was inserted before or not.
        $is_fact_exists = Fact::where('md5_fact', $md5_fact)->exists();
        if ($is_fact_exists) {
            return $this->reportNotUnique($parsed_fact);
        }

        $this->insertFact($parsed_fact);
        return $this->reportSuccess($parsed_fact);
    }

    /**
     * Reports whether fact was inserted successfully or not.
     * @param array $data Expected array with following structure:
     * ['fact_data' => $parsed_fact_body, 'isFound' => $bool, 'isUnique' => $bool, 'result' => $bool]
     * @return array
     */
    public function report($data): array
    {
        $report = [];
        $report['number'] = $data['fact_data']->number;
        $report['fact'] = $data['fact_data']->text;
        $report['category'] = $data['fact_data']->type;
        $report['isFound'] = $data['isFound'];
        $report['isUnique'] = $data['isUnique'];
        $report['result'] = $data['result'];
        return $report;
    }

    /**
     * Builds successful report about fact insertion.
     * @param $parsed_fact
     * @return array
     */
    private function reportSuccess($parsed_fact) {
        return $this->report([
            'fact_data' => $parsed_fact,
            'isFound' => true,
            'isUnique' => true,
            'result' => true
        ]);
    }

    /**
     * Builds fail report about fact insertion. Says it wasn't found.
     * @param $parsed_fact
     * @return array
     */
    private function reportNotFound($parsed_fact) {
        return $this->report([
            'fact_data' => $parsed_fact,
            'isFound' => false,
            'isUnique' => true,
            'result' => false
        ]);
    }

    /**
     * Builds fail report about fact insertion. Says it's not unique.
     * @param $parsed_fact
     * @return array
     */
    private function reportNotUnique($parsed_fact) {
        return $this->report([
            'fact_data' => $parsed_fact,
            'isFound' => true,
            'isUnique' => false,
            'result' => false
        ]);
    }

    /**
     * Inserts fact into the DB.
     * @param $parsed_fact
     */
    private function insertFact($parsed_fact) {
        $number_id = Number::where('number', $parsed_fact->number)->first()->id;

        $category_name = $this->findCategoryWhichMatchesToDb($parsed_fact->type);
        $category_id = Category::where('name', $category_name)->first()->id;

        $md5_fact = md5($parsed_fact->text);

        $fact = new Fact;
        $fact->cat_id = $category_id;
        $fact->number_id = $number_id;
        $fact->fact = $parsed_fact->text;
        $fact->md5_fact = $md5_fact;
        $fact->save();
    }

    /**
     * Finds appropriate category name for inserting fact in DB.
     * @param $category_name
     * @return string
     */
    private function findCategoryWhichMatchesToDb($category_name) {
        $parsing_cfg = (new ParseConfig)->getConfig();
        $db_category_name = $parsing_cfg['DB_CATEGORIES'][$category_name];
        return $db_category_name;
    }
}