#!/usr/bin/env python3
"""
Sensor Data Simulator for 3D Building Viewer Heatmap System
Periodically updates sensor values using existing REST API endpoints
"""

import requests
import time
import random
import json
from datetime import datetime

# Configuration
API_BASE_URL = "http://localhost:3000"
UPDATE_INTERVAL = 30  # seconds between updates
MODEL_PATH = "1749654662656_DIC_11S.glb"
MESH_NAME = "Carpet"

# Existing sensor configurations (coordinates from your database)
SENSORS = [
    {
        "sensorId": "temp_001",
        "x": 63,
        "y": 5,
        "z": -65,
        "base_temp": 42,  # Base temperature for simulation
        "variation": 8    # Temperature variation range (+/-)
    },
    {
        "sensorId": "temp_002", 
        "x": 59.38,
        "y": 1,
        "z": 67.51,
        "base_temp": 20,
        "variation": 5
    },
    {
        "sensorId": "temp_003",
        "x": -6.845,
        "y": 5, 
        "z": -65.47,
        "base_temp": 34,
        "variation": 6
    }
]

def generate_sensor_data():
    """Generate new sensor readings with simulated temperature values"""
    data_points = []
    
    for sensor in SENSORS:
        # Simulate temperature variation around base temperature
        new_temp = round(
            sensor["base_temp"] + random.uniform(-sensor["variation"], sensor["variation"]), 
            1
        )
        
        # Ensure realistic temperature range (10°C to 60°C)
        new_temp = max(10.0, min(60.0, new_temp))
        
        data_point = {
            "sensorId": sensor["sensorId"],
            "x": sensor["x"],
            "y": sensor["y"], 
            "z": sensor["z"],
            "value": new_temp,
            "label": f"Sensor {sensor['sensorId']}: {new_temp}°C"
        }
        
        data_points.append(data_point)
    
    return data_points

def update_heatmap_data(data_points):
    """Send updated sensor data to the API"""
    url = f"{API_BASE_URL}/api/heatmap-data"
    
    payload = {
        "modelPath": MODEL_PATH,
        "meshName": MESH_NAME,
        "dataPoints": data_points
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        response.raise_for_status()
        
        result = response.json()
        print(f"✅ Successfully updated {result.get('count', 0)} sensors")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error updating sensor data: {e}")
        return False

def print_sensor_values(data_points):
    """Print current sensor values for monitoring"""
    print("\n📊 Current Sensor Readings:")
    print("-" * 50)
    for point in data_points:
        print(f"  {point['sensorId']}: {point['value']}°C at ({point['x']}, {point['y']}, {point['z']})")
    print("-" * 50)

def main():
    """Main simulation loop"""
    print("🌡️  Starting Sensor Data Simulator")
    print(f"📡 Updating sensors every {UPDATE_INTERVAL} seconds")
    print(f"🏢 Model: {MODEL_PATH}")
    print(f"🎯 Mesh: {MESH_NAME}")
    print("=" * 60)
    
    iteration = 0
    
    try:
        while True:
            iteration += 1
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            
            print(f"\n🔄 Update #{iteration} - {timestamp}")
            
            # Generate new sensor readings
            data_points = generate_sensor_data()
            
            # Print values for monitoring
            print_sensor_values(data_points)
            
            # Update database via API
            success = update_heatmap_data(data_points)
            
            if success:
                print(f"⏰ Next update in {UPDATE_INTERVAL} seconds...")
            else:
                print(f"⚠️  Update failed, retrying in {UPDATE_INTERVAL} seconds...")
            
            # Wait for next update
            time.sleep(UPDATE_INTERVAL)
            
    except KeyboardInterrupt:
        print("\n\n🛑 Simulator stopped by user")
    except Exception as e:
        print(f"\n💥 Unexpected error: {e}")

if __name__ == "__main__":
    main() 