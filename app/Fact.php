<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fact extends Model
{
    public $timestamps = false;

    /**
     * Gets the number which fact belongs to
     */
    public function number() {
        return $this->belongsTo('App\Number');
    }

    /**
     * Gets the category which fact belongs to
     */
    public function category() {
        return $this->belongsTo('App\Category');
    }
}
