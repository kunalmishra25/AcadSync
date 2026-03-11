import React, { useEffect } from "react";
import "./InlineMessage.css";

const InlineMessage = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message || !onClose) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      onClose();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, message, onClose]);

  if (!message) {
    return null;
  }

  return (
    <div className={`inline-message inline-message-${type}`} role="status" aria-live="polite">
      <span>{message}</span>
      {onClose && (
        <button type="button" className="inline-message-close" onClick={onClose} aria-label="Dismiss message">
          x
        </button>
      )}
    </div>
  );
};

export default InlineMessage;
