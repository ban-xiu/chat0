import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChatStore = defineStore('chat', () => {
  const qaPairs = ref([
    { question: '你好', answer: '你好！有什么可以帮您的？' },
    { question: '什么是大模型？', answer: '大模型是指具有大量参数的深度学习模型，能在多种任务中表现出色。' },
    { question: '如何使用大模型？', answer: '可以通过 API 调用或者自己训练模型来使用。' }
  ]);
  const messages = ref([...qaPairs.value]);

  const addMessage = (message: { question: string; answer: string }) => {
    messages.value.push(message);
  };

  return {
    messages, 
    addMessage
  };
});