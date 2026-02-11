import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SystemSettings.css";

const SETTINGS_KEY = "cc_system_settings";

const defaultSettings = {
  systemName: "AcadSync Admin Dashboard",
  academicYear: "2024-2025",
  darkMode: false,
  emailNotifications: true,
  autoBackup: true,
};

const SystemSettings = () => {
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(SETTINGS_KEY) || JSON.stringify(defaultSettings));
    setSettings(stored);
  }, []);

  const handleChange = (e) => {
    const { id, type, checked, value } = e.target;
    setSettings({
      ...settings,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const saveSettings = () => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  const resetSettings = () => {
    if (window.confirm("Are you sure you want to reset all settings to default values?")) {
      setSettings(defaultSettings);
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultSettings));
      alert("Settings have been reset to default values.");
    }
  };

  return (
    <>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h2>System Settings</h2>
          <p>Configure system preferences, notifications, and security settings</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="actions-bar">
            <h3>System Configuration</h3>
            <Link to="/admin/dashboard" className="btn btn-outline">Back to Dashboard</Link>
          </div>

          <div className="settings-card">
            {/* General Settings */}
            <div className="settings-section">
              <h4>General Settings</h4>
              <div className="form-group">
                <label htmlFor="systemName">System Name</label>
                <input type="text" id="systemName" value={settings.systemName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="academicYear">Current Academic Year</label>
                <select id="academicYear" value={settings.academicYear} onChange={handleChange}>
                  <option value="2024-2025">2024-2025</option>
                  <option value="2025-2026">2025-2026</option>
                  <option value="2026-2027">2026-2027</option>
                </select>
              </div>
            </div>

            {/* Toggle Settings */}
            <div className="settings-section">
              <h4>System Preferences</h4>
              <div className="form-group">
                <label className="toggle-switch">
                  
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">Dark Mode</span>
              </div>
              <div className="form-group">
                <label className="toggle-switch">
                  <input type="checkbox" id="emailNotifications" checked={settings.emailNotifications} onChange={handleChange} />
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">Email Notifications</span>
              </div>
              <div className="form-group">
                <label className="toggle-switch">
                  <input type="checkbox" id="autoBackup" checked={settings.autoBackup} onChange={handleChange} />
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">Automatic Backups</span>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="settings-footer">
              <button className="btn btn-danger" onClick={resetSettings}>Reset to Defaults</button>
              <button className="btn" onClick={saveSettings}>Save Settings</button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default SystemSettings;
