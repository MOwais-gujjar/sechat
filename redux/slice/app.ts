'use client'
import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: 'contact'
    }
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar(state, action){
            state.sidebar.open =!state.sidebar.open;
        },
        updateSidebarType(state, action){
            state.sidebar.type = action.payload.type;
        }
    }
})
// reducers
export default slice.reducer;

import React from 'react'

export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar())
  } 
}

export function UpdateSidebar(type: any) {
    return async () => {
      dispatch(slice.actions.updateSidebarType({
        type
      }))
    } 
  }