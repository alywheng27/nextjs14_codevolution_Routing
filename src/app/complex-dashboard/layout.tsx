import React from "react";

const ComplexDashboardlayout = ({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  /**
   * ! Parallel Routes
   * Parallel routes in nextjs are defined using a feature known as slots.
   * Slots help structure our content in a modular fashion.
   * To define a slot, we use the @folder naming convention.
   * Each slot is then passed as a prop to its corresponding layout.tsx file.
   * 
   * ! Benefits of Parallel Routing
   * ? Independent Route Handling
   * Each slot of your layout, can have its own loading or error states.
   * Beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors.
   * Only the the error section will be affected and not the entire page.
   * ? Sub-navigation in routes
   * each slot can essentially function as a mini-application, complete with its own navigation and state management.
   * Useful where different sections serve distinct purposes.
   * Each slot can operate standalone entity without affecting the state or display of other sections.
   */

  const isLogin = false;


  // ! Conditional Routing
  // Putting a condition inside a return.
  return isLogin ? (
  <div>
    <div>{ children }</div>
    <div className="flex">
      <div className="flex flex-col">
        <div>{ users }</div>
        <div>{ revenue }</div>
      </div>
      <div className="flex flex-1">{ notifications }</div>
    </div>
  </div>
  ): (
    login
  );
};

export default ComplexDashboardlayout;
