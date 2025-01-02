// src/utils/api.js
export const getMockPosts = () => [
    {
      content: "This is a mock post!",
      user: { name: "Noor Fatima", profilePic: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" },
      timestamp: Date.now(),
      likes: 5,
    },
    {
      content: "Here's another post!",
      user: { name: "Noor Fatima", profilePic: "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU" },
      timestamp: Date.now(),
      likes: 2,
    },
  ];
  