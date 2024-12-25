# Next.js 15 App Router - Unexpected Fetch Behavior in useEffect

This repository demonstrates a potential issue in Next.js 15's App Router when using `fetch` inside a `useEffect` hook.  The problem arises from the repeated execution of `useEffect` whenever the component re-renders, which can lead to repeated, unnecessary `fetch` calls or display of stale data.

The `bug.js` file showcases the problem. The `bugSolution.js` file provides a solution using `useSWR` to handle caching and efficient data fetching.