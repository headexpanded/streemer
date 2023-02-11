<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\SmartMeter;
use Illuminate\Http\Request;

class SmartMeterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('SmartMeters/Index', [
            'smartmeters' => SmartMeter::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'smartmeter' => 'required|string|max:16',
            'sm_name' => 'string:max:255',
        ]);
 
        $request->user()->smartmeters()->create($validated);
 
        return redirect(route('smartmeters.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SmartMeter  $smartMeter
     * @return \Illuminate\Http\Response
     */
    public function show(SmartMeter $smartMeter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SmartMeter  $smartMeter
     * @return \Illuminate\Http\Response
     */
    public function edit(SmartMeter $smartMeter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SmartMeter  $smartMeter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $smartMeter)

    {
        $smartMeter = SmartMeter::findOrFail($smartMeter);
        $this->authorize('update', $smartMeter);
 
        $validated = $request->validate([
            'smartmeter' => 'required|string|max:16',
        ]);
 
        $smartMeter->update($validated);
 
        return redirect(route('smartmeters.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SmartMeter  $smartMeter
     * @return \Illuminate\Http\Response
     */
    public function destroy($smartMeter)
    {
        $smartMeter = SmartMeter::findOrFail($smartMeter);
        $this->authorize('delete', $smartMeter);
 
        $smartMeter->delete();
 
        return redirect(route('smartmeters.index'));
    }
}
