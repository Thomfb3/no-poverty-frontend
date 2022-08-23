export default function determineStatus(status, green, red, yellow, gray) {
    let statusColor = gray;
    if (status === "open") statusColor = green;
    if (status === "closed") statusColor = red;
    return statusColor;
  };
  