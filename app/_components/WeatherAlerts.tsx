// app/_components/WeatherAlerts.tsx

// Tell Next.js that this is a Client
// Component.
"use client";

// ...
import clsx from "clsx/lite";
import { useState } from "react";

export default function WeatherAlerts() {
    // We can only use React state in Client
    // Components.
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <div>
            <div
                className={clsx(
                    "flex cursor-pointer items-center justify-between bg-red-200 p-4 text-red-900",
                    isOpen ? "rounded-t-md" : "rounded-md",
                )}
                onClick={toggleIsOpen}
            >
                Weather Alerts
                <span
                    className={clsx(
                        "transform transition-transform",
                        isOpen && "rotate-180",
                    )}
                >
                    &#9660; {/* Chevron down icon */}
                </span>
            </div>
            {isOpen && (
                <div className="divide-y divide-dashed divide-white/20 rounded-b-md bg-red-900 p-4 text-red-100">
                    <p className="text-sm">
                        🌩️ Severe Thunderstorm Warning until 09:00 PM
                    </p>
                    <p className="text-sm">
                        🌨️ Blizzard Warning in effect from 01:00 AM
                    </p>
                    <p className="text-sm">
                        🌊 Coastal Flood Advisory from noon today to
                        10:00 PM
                    </p>
                </div>
            )}
        </div>
    );
}