import React, { useState } from 'react';

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="rules">
      <h2 onClick={toggleRules} className="rules-header">
        Rules
        <span className={`arrow ${showRules ? 'up' : 'down'}`}></span>
      </h2>
      {showRules && (
        <div className="rules-content">
          <p>The rules of the game are simple:<br /><br />
          Your objective is to accumulate 100 points to successfully guide your child into a peaceful slumber. Each item you select carries a specific number of points, either adding to your total and bringing you closer to victory, or subtracting and nudging you toward defeat.<br /><br />
          No two items are alike in their sleep-inducing powers; some have greater influence on sleepiness, while others might inadvertently rouse your child from their sleepy state. Choose your items wisely, for every decision counts.<br /><br />
          Remember, reaching 0 points means you've lost the bedtime battle, requiring a fresh start to achieve victory once more.
          </p>
        </div>
      )}
    </div>
  );
};

export default Rules;
