<script setup>
import { useTextChatStore } from '../stores/textChat';

const textChatStore = useTextChatStore();

function sendQuestion(){
    textChatStore.createPrompt();
    textChatStore.sendPrompt();
}

</script>

<template>
    <article class="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        <div class="mt-4">
            <h3>Enter the text you would like to ask questions about.</h3>
            <section>
                <textarea rows="20" v-model="textChatStore.textChatStore" class="block w-full rounded-md borer-0 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600"></textarea>
            </section>
        </div>
        <div>
            <div>
                <div class="flex rounded-md shadow-sm mt-4">
                    <div class="relative flex flex-grow items-stretch focus-within:z-10">
                        <input v-model="textChatStore.quesion" placeholder="Send a message" class="question-input"/>
                    </div>
                </div>
                <button @click="sendQuestion" type="button" class="chat-button group relative -ml-px inline-flex items-center gap-x-1.5 rounded">Send</button>
            </div>
        </div>
    </article>
    <div class="flex justify-end">
        <button type="button" @click="textChatStore.clearChat()" class="button button-secondary">Clear</button>
    </div>
</template>
