<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Number extends Model
{
    public $timestamps = false;

    protected $guarded = [];

    /**
     * Gets the facts related to particular number
     */
    public function facts() {
        return $this->hasMany('App\Fact');
    }
}
