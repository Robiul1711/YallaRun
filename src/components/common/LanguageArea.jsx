import React, { useEffect, useState } from "react";

// --- Helper Function to manage the Google Translate cookie ---
// This is the key to reliably telling Google Translate what language to use without a page reload.
const setGoogleTranslateCookie = (langCode) => {
  // The cookie name Google Translate uses
  const cookieName = "googtrans";
  
  // The desired cookie value, e.g., '/en/ar'
  const cookieValue = `/en/${langCode}`;
  
  // Set the cookie for the root path
  document.cookie = `${cookieName}=${cookieValue}; path=/`;
  
  // Additionally, to ensure a clean state, we can remove the alternate value
  // This helps when switching back and forth.
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  document.cookie = `${cookieName}=${cookieValue}; path=/`;
};


const LanguageArea = () => {
  // State to track the selected language, initialized from localStorage or default to 'en'
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  // Effect 1: Load the Google Translate script and initialize the widget.
  // This effect runs only ONCE when the component first mounts.
  useEffect(() => {
    // If the initialization function already exists, don't re-add the script.
    if (window.googleTranslateElementInit) {
      return;
    }

    // Define the global callback function that Google's script will call.
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // SIMPLE is best for a hidden element
          autoDisplay: false,
        },
        "google_translate_element" // The ID of the div where the widget will be rendered
      );
    };

    // Create a new script element for the Google Translate API.
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []); // The empty dependency array [] ensures this effect runs only once.


  // Effect 2: Handle language changes.
  // This effect runs whenever the `selectedLanguage` state changes.
  useEffect(() => {
    // 1. Update localStorage to persist the choice.
    localStorage.setItem("selectedLanguage", selectedLanguage);

    // 2. Update the document's direction and language attributes for accessibility and CSS.
    if (selectedLanguage === "ar") {
      // document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      // document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }

    // 3. Update the Google Translate cookie. This is a robust way to signal the change.
    setGoogleTranslateCookie(selectedLanguage);

    // 4. Programmatically select the language in the hidden Google Translate widget.
    // We use an interval because the widget might not be ready immediately.
    const intervalId = setInterval(() => {
      const selectElement = document.querySelector(".goog-te-combo");
      if (selectElement) {
        selectElement.value = selectedLanguage;
        // Dispatch a 'change' event to trigger Google's translation logic.
        selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        
        // Once we've successfully changed the language, clear the interval.
        clearInterval(intervalId);
      }
    }, 100); // Check every 100ms.

    // Cleanup: Clear the interval if the component unmounts before the widget is found.
    return () => clearInterval(intervalId);

  }, [selectedLanguage]); // This effect depends on `selectedLanguage`.

  // The function called when a user clicks a language button.
  // It simply updates the state, and the `useEffect` above handles all the side effects.
  const changeLanguage = (langCode) => {
    // This is the only thing we need to do here. The useEffect hook will do the rest.
    // We also check if the language is already selected to avoid unnecessary re-renders.
    if (selectedLanguage !== langCode) {
      setSelectedLanguage(langCode);
      
      // We still need a reload here BUT only if the language actually changes.
      // Google Translate's script works best with a reload to properly re-render all text nodes.
      // This is the most reliable way to fix inconsistencies after navigation.
      // The state management above ensures the correct language is applied on reload.
      window.location.reload();
    }
  };

  return (
    <div className="p-2 bg-white rounded-full gap-2 flex md:h-[54px] h-[44px] md:w-[120px] w-[80px] justify-center items-center shadow">
      {/* This is the hidden div where the Google Translate widget is rendered */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* EN button */}
      <button
        translate="no" // Prevents this button from being translated
        type="button"
        onClick={() => changeLanguage("en")}
        className={`md:w-[42px] w-[32px] md:h-[42px] h-[32px] rounded-full flex justify-center items-center text-center aspect-square md:text-lg text-sm transition ${
          selectedLanguage === "en"
            ? "bg-primaryColor text-customBlack font-semibold" // Active state
            : "bg-gray-200 text-gray-700" // Inactive state
        }`}
      >
        EN
      </button>

      {/* AR button */}
      <button
        translate="no" // Prevents this button from being translated
        type="button"
        onClick={() => changeLanguage("ar")}
        className={`md:w-[42px] w-[32px] md:h-[42px] h-[32px] rounded-full flex justify-center items-center text-center aspect-square md:text-lg text-sm transition ${
          selectedLanguage === "ar"
            ? "bg-primaryColor text-customBlack font-semibold" // Active state
            : "bg-gray-200 text-gray-700" // Inactive state
        }`}
      >
        AR
      </button>
    </div>
  );
};

export default LanguageArea;