<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;

    /**
     * Get the facts related to particular category
     */
    public function facts() {
        return $this->hasMany('App\Fact', 'cat_id');
    }
}