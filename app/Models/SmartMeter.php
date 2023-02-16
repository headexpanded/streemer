<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmartMeter extends Model
{
    use HasFactory;

    protected $fillable = [
        'smartmeter',
        'name',
        'supplier_id',
        'amount_payable',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
        
    }
}
