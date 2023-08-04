import paho.mqtt.client as mqtt
import json
import time

# MQTT broker configuration
broker_address = "broker.hivemq.com"
broker_port = 1883
client = mqtt.Client(client_id="myclientid")  # You can set your own client_id here

# Function to handle the MQTT connection
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("MQTT connected")
        client.subscribe("lucho", qos=1)  # Subscribe to the topic "lucho" with QoS level 1
    else:
        print(f"Connection failed with error code: {rc}")

# Function to handle received MQTT messages
def on_message(client, userdata, message):
    global prevCPUValue, prevMemoryValue, prevDiskValue  # Move the global declaration here
    payload = message.payload.decode("utf-8")  # Decode the payload as a string
    try:
        data = json.loads(payload)  # Parse the payload as JSON
    except json.JSONDecodeError:
        print("Received MQTT message with invalid JSON payload:", payload)
        return

    if message.topic == "lucho":
        dataCPU = data.get("CPU", 0)
        dataMemoria = data.get("Memoria", 0)
        dataDisco = data.get("Disco", 0)

        # Calculate the difference with respect to the previous value
        diffCPU = dataCPU - prevCPUValue
        diffMemory = dataMemoria - prevMemoryValue
        diffDisk = dataDisco - prevDiskValue

        # Calculate the percentage of change
        percentageCPU = calculate_percentage(diffCPU, prevCPUValue)
        percentageMemory = calculate_percentage(diffMemory, prevMemoryValue)
        percentageDisk = calculate_percentage(diffDisk, prevDiskValue)

        # Display the values and percentages
        print(f"CPU: {dataCPU} | %: {percentageCPU}%")
        print(f"Memory: {dataMemoria} | %: {percentageMemory}%")
        print(f"Disk: {dataDisco} | %: {percentageDisk}%")

        # Update the previous values with the new values
        prevCPUValue = dataCPU
        prevMemoryValue = dataMemoria
        prevDiskValue = dataDisco

        # Send data in JSON format to "lucho" topic on HiveMQ
        send_data_to_hivemq(data)

# Function to calculate the percentage of change
def calculate_percentage(diff, prev_value):
    if prev_value == 0:
        return "0"  # If the previous value is zero, the percentage change is zero
    percentage = ((diff / prev_value) * 100)
    return f"+{percentage:.2f}%" if percentage >= 0 else f"{percentage:.2f}%"

# Function to send data to "lucho" topic on HiveMQ
def send_data_to_hivemq(data):
    topic = "lucho"
    payload = json.dumps(data)
    client.publish(topic, payload, qos=1)
    print("Data sent to HiveMQ")

# Set the callbacks for MQTT events
client.on_connect = on_connect
client.on_message = on_message

# Set up the initial previous values
prevCPUValue = 0
prevMemoryValue = 0
prevDiskValue = 0

# Connect to the MQTT broker
client.connect(broker_address, port=broker_port, keepalive=60)

# Start the MQTT loop to process incoming messages
client.loop_start()

# Main loop to send data to HiveMQ
while True:
    # Sample data, replace with your actual data
    data_to_send = {
        "CPU": 75,
        "Memoria": 50,
        "Disco": 80,
    }
    send_data_to_hivemq(data_to_send)
    time.sleep(10)  # Wait for 10 seconds before sending the next data
