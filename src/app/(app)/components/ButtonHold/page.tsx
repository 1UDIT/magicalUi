"use client";

import HoldActionButton from '@/Components/UI/ButtonHold';
import React from 'react'

const page = () => {
  return (
    <>
      <HoldActionButton
        variant="delete"
        onAction={() => console.log("Deleted")}
      />

      <HoldActionButton
        variant="warning"
        onAction={() => console.log("Warning accepted")}
      />

      <HoldActionButton
        variant="success"
        onAction={() => console.log("Confirmed")}
      />

      <HoldActionButton
        variant="danger"
        onAction={() => console.log("Powered off")}
      >
        Shutdown
      </HoldActionButton>
    </ >
  )
}

export default page
