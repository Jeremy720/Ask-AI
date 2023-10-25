import { defineStore } from 'pinia';

export const useTextChatStore = defineStore('textChat', () => {

  const text = ref('');
  const prompt = ref('');
  const question = ref('');
  const gptResponse = ref('');
   
  function createPrompt(){

  }
  
  function sendPrompt(){

  }

  function clearChat(){

  }
  
  return {text, question, prompt, gptResponse, createPrompt, sendPrompt, clearChat};
})
