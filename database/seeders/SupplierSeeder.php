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
            ['name' => 'Creos', 'supplier_rate' => '0.03'],
            ['name' => 'Enovos', 'supplier_rate' => '0.045'],
            ['name' => 'SudEnergie', 'supplier_rate' => '0.035'],

        ]);
    }
}
