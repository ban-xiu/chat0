<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useChatStore } from '../stores/chatStore';
import { ElInput, ElButton, ElCard } from 'element-plus';

const chatStore = useChatStore();
const inputQuestion = ref('');

const sendQuestion = () => {
  if (inputQuestion.value.trim()) {
    // 这里可替换为实际的大模型调用
    const mockAnswer = `这是对 “${inputQuestion.value}” 的模拟回答。`;
    chatStore.addMessage({
      question: inputQuestion.value,
      answer: mockAnswer
    });
    inputQuestion.value = '';
  }
};

onMounted(() => {
  // 初始化时加载预设问答对
  chatStore.messages = [...chatStore.messages];
});
</script>

<template>
  <div class="chat-container">
    <ElCard class="chat-card">
      <div class="message-list">
        <div v-for="(msg, index) in chatStore.messages" :key="index" class="message-item">
          <div class="question">用户: {{ msg.question }}</div>
          <div class="answer">AI: {{ msg.answer }}</div>
        </div>
      </div>
      <div class="input-area">
        <ElInput
          v-model="inputQuestion"
          placeholder="请输入您的问题"
          class="input"
          @keyup.enter="sendQuestion"
        />
        <ElButton type="primary" @click="sendQuestion">发送</ElButton>
      </div>
    </ElCard>
  </div>
</template>

<style scoped>
.chat-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
}

.chat-card {
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
}

.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message-item {
  margin-bottom: 20px;
}

.question {
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
}

.answer {
  color: #666;
  white-space: pre-wrap;
}

.input-area {
  display: flex;
  gap: 10px;
  padding: 10px;
  border-top: 1px solid #eee;
}

.input {
  flex: 1;
}
</style>