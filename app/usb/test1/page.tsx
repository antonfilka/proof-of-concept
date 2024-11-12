"use client";
import React, { useState } from "react";

const USBDevices = () => {
  const [devices, setDevices] = useState<any>([]);
  const [error, setError] = useState("");

  const requestUSBDevice = async () => {
    try {
      setError("");

      if (navigator?.usb) {
        const selectedDevices = await navigator.usb.requestDevice({
          filters: [],
        });
        console.log(selectedDevices);
        setDevices([selectedDevices]);
      }
    } catch (err) {
      setError("No devices found or permission denied.");
      console.error(err);
    }
  };

  const getConnectedDevices = async () => {
    try {
      const connectedDevices = await navigator.usb.getDevices();
      setDevices(connectedDevices);
    } catch (err) {
      setError("Error fetching connected devices.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>USB Devices</h2>

      <button
        onClick={requestUSBDevice}
        style={{ margin: "10px", padding: "10px" }}
      >
        Request USB Device
      </button>
      <button
        onClick={getConnectedDevices}
        style={{ margin: "10px", padding: "10px" }}
      >
        Get Connected Devices
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {devices.length > 0 ? (
        <div>
          <h3>Connected USB Devices:</h3>
          <ul>
            {devices.map((device, index) => (
              <li key={index}>
                <strong>Product Name:</strong> {device.productName || "Unknown"}{" "}
                <br />
                <strong>Manufacturer Name:</strong>{" "}
                {device.manufacturerName || "Unknown"} <br />
                <strong>Serial Number:</strong>{" "}
                {device.serialNumber || "Unknown"}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No USB devices connected.</p>
      )}
    </div>
  );
};

export default USBDevices;
