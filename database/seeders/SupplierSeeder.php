<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('suppliers')->insert([
            ['name' => 'Creos', 'supplier_rate' => '0.02536'],
            ['name' => 'Enovos', 'supplier_rate' => '0.04512'],
            ['name' => 'SudEnergie', 'supplier_rate' => '0.03594'],

        ]);
    }
}
