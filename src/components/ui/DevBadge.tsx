import React from "react";
import { AlertCircle } from "lucide-react";

interface DevBadgeProps {
  message?: string;
  className?: string;
}

export default function DevBadge({ 
  message = "Entorno de Desarrollo: Datos temporales/simulados para propósitos de diseño visual.", 
  className 
}: DevBadgeProps) {
  return (
    <div className={`my-6 px-4 py-3 border border-brand-copper/30 bg-brand-copper/5 text-brand-copper text-xs font-mono tracking-wide flex items-center space-x-2.5 rounded-none max-w-4xl mx-auto ${className || ""}`}>
      <AlertCircle className="h-4.5 w-4.5 text-brand-copper flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
}
