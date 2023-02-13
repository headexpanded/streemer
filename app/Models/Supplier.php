<?php

namespace App\Models;

use Inertia\Inertia;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'supplier',
    ];

    public function smartmeters()
    {
        return $this->hasMany(SmartMeter::class);
    }

    public static function getSupplierNameByID($supplier_id)
    {
        return self::where('id', $supplier_id)->first();

    }

    public function index()
    {
        $suppliers = Supplier::all();
        return response()->json($suppliers);
    }
}
