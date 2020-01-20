<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Chanson extends Model  {
    // Set name of table linked to this model
    protected $table = 'chanson';

    public function utilisateur() { // Getting the user that posted the track
        return $this->belongsTo("App\User", "utilisateur_id");
    }
}