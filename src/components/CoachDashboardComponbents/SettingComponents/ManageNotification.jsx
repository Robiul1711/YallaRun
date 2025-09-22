import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';

const ManageNotification = () => {
  const [notifications, setNotifications] = useState({
    subscription: true,
    articles: true,
    events: true
  });

  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveUpdate = () => {
    console.log('Saving notification preferences:', notifications);
    // Add your save logic here
  };

  return (
    <div className="">

      
      <div className="space-y-8">
        {/* Subscription & Payments */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              Subscription & Payments
            </h3>
            <p className="text-sm text-gray-600">
              Billing reminders, subscription renewals, and payment confirmations
            </p>
          </div>
          <div className="ml-6">
            <Switch
              checked={notifications.subscription}
              onCheckedChange={() => handleToggle('subscription')}
              className="data-[state=checked]:bg-secondaryColor"
            />
          </div>
        </div>

        {/* Articles Remainders */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              Articles Remainders
            </h3>
            <p className="text-sm text-gray-600">
              Get notified about article review status
            </p>
          </div>
          <div className="ml-6">
            <Switch
              checked={notifications.articles}
              onCheckedChange={() => handleToggle('articles')}
              className="data-[state=checked]:bg-secondaryColor"
            />
          </div>
        </div>

        {/* Event Remainders */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              Event Remainders
            </h3>
            <p className="text-sm text-gray-600">
              Get reminders about upcoming events
            </p>
          </div>
          <div className="ml-6">
            <Switch
              checked={notifications.events}
              onCheckedChange={() => handleToggle('events')}
              className="data-[state=checked]:bg-secondaryColor"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-12">
        <button
          onClick={handleSaveUpdate}
          className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors duration-200  "
        >
          Save & Update
        </button>
      </div>
    </div>
  );
};

export default ManageNotification;