<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SupplierController extends Controller
{
    public function index()
    {
        $suppliers = Supplier::all();
        return response()->json($suppliers);
    }

    public function show($supplier_id)
    {
        $supplier = Supplier::find($supplier_id);
        
        return response()->json($supplier);
    }
}
