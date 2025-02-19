<script setup>
// import KylePepButton from "./KylePepButton.vue";

const services = {
  "construction": {
    "image": "https://images.unsplash.com/photo-1645005513709-77336f075dc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Construction",
    "description": "Delectus voluptatem fugiat doloremque ab in. Assumenda eos temporibus quia temporibus expedita numquam ut velit repellendus. Totam aperiam eum aut ea consequatur. Totam iure ab in ea possimus mollitia aperiam. Qui corporis officiis accusantium eveniet fugiat neque necessitatibus. Ipsum dolores fugit facere et labore et officia magnam sint.",
    "quote": "Nulla omnis nulla rerum. Et architecto dolorem unde. In non molestiae vel autem iste. Architecto et eum beatae facilis. Illum aut non consequuntur reprehenderit velit sequi quia.",
    "benefits": [
      "Eum dolor atque quisquam qui voluptate necessitatibus tempore.",
      "Alias quidem non explicabo delectus totam dolores odit.",
      "Et laboriosam magni animi dignissimos.",
      "Adipisci dolorem minus quas voluptate sapiente velit unde veritatis.",
      "Perferendis nihil veritatis.",
      "Et reiciendis iure blanditiis quas sed dolore."
    ],
    "faqs": [
      {
        "question": "What is Sports Rehabilitation and how can I benefit?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": true
      },
      {
        "question": "What is involved in the initial consultation?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": false
      },
      {
        "question": "Does insurance cover your services?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": false
      }
    ]
  },
  "consultation": {
    "image": "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Consultation",
    "description": "Delectus voluptatem fugiat doloremque ab in. Assumenda eos temporibus quia temporibus expedita numquam ut velit repellendus. Totam aperiam eum aut ea consequatur. Totam iure ab in ea possimus mollitia aperiam. Qui corporis officiis accusantium eveniet fugiat neque necessitatibus. Ipsum dolores fugit facere et labore et officia magnam sint.",
    "quote": "Nulla omnis nulla rerum. Et architecto dolorem unde. In non molestiae vel autem iste. Architecto et eum beatae facilis. Illum aut non consequuntur reprehenderit velit sequi quia.",
    "benefits": [
      "Eum dolor atque quisquam qui voluptate necessitatibus tempore.",
      "Alias quidem non explicabo delectus totam dolores odit.",
      "Et laboriosam magni animi dignissimos.",
      "Adipisci dolorem minus quas voluptate sapiente velit unde veritatis.",
      "Perferendis nihil veritatis.",
      "Et reiciendis iure blanditiis quas sed dolore."
    ],
    "faqs": [
      {
        "question": "What is Home Care and how can I benefit?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": true
      },
      {
        "question": "What is involved in the initial consultation?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": false
      },
      {
        "question": "Does insurance cover your services?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": false
      }
    ]
  },
  "service": {
    "image": "https://images.unsplash.com/photo-1620733723572-11c53f73a416?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Service",
    "description": "Delectus voluptatem fugiat doloremque ab in. Assumenda eos temporibus quia temporibus expedita numquam ut velit repellendus. Totam aperiam eum aut ea consequatur. Totam iure ab in ea possimus mollitia aperiam. Qui corporis officiis accusantium eveniet fugiat neque necessitatibus. Ipsum dolores fugit facere et labore et officia magnam sint.",
    "quote": "Nulla omnis nulla rerum. Et architecto dolorem unde. In non molestiae vel autem iste. Architecto et eum beatae facilis. Illum aut non consequuntur reprehenderit velit sequi quia.",
    "benefits": [
      "Eum dolor atque quisquam qui voluptate necessitatibus tempore.",
      "Alias quidem non explicabo delectus totam dolores odit.",
      "Et laboriosam magni animi dignissimos.",
      "Adipisci dolorem minus quas voluptate sapiente velit unde veritatis.",
      "Perferendis nihil veritatis.",
      "Et reiciendis iure blanditiis quas sed dolore."
    ],
    "faqs": [
      {
        "question": "What is Aroma Therapy and how can I benefit?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": true
      },
      {
        "question": "What is involved in the initial consultation?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": false
      },
      {
        "question": "Does insurance cover your services?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "state": false
      }
    ]
  },
}
</script>


<template>
  <div class="bg-linear-to-b via-emerald-black/50 to-black/50 text-xs lg:text-lg text-green-200">
    <div class="bg-fm-teal px-6 lg:px-40 grid grid-cols-4 gap-1 gap-y-8 lg:gap-20 text-fm-pink py-12">

      <section class="col-span-4 lg:col-span-1 lg:col-start-3 space-y-4 lg:flex flex-col justify-start">
        <div class="font-bold text-lg">
          Services
        </div>
        <ul class="flex justify-between space-y-4 lg:space-y-1 lg:text-sm px-2">
          <li v-for="service, index in services" :key="index">
            <router-link :to="{ name: 'contact' }" class="text-emerald-300">
              {{ service.title }}
            </router-link>
          </li>
        </ul>
      </section>

      <section class="col-span-4 lg:col-span-1 space-y-4 h-full lg:flex flex-col justify-around">
        <div class="font-bold text-lg">
          Get In Touch
        </div>
        <ul class="flex justify-between px-2 space-y-4">
          <li class="font-semibold text-sm ">Phone: <span
              class="font-normal text-sm text-emerald-300">xxx-xxx-xxxx</span></li>
          <li class="font-semibold text-sm">Email: <span
              class="font-normal text-sm text-emerald-300">email@email.com</span></li>
        </ul>

        <!-- <div class="flex gap-4">
          <a target="_blank" href="https://www.google.com"
            class="bg-emerald-500 rounded-full h-8 w-8 flex justify-center items-center">
            <i class="relative mdi mdi-facebook text-xl"></i>
          </a>
          <a target="_blank" href="https://www.google.com"
            class="bg-emerald-500 rounded-full h-8 w-8 flex justify-center items-center">
            <i class="relative mdi mdi-instagram text-xl"></i>
          </a>
          <a target="_blank" href="https://www.google.com"
            class="bg-emerald-500 rounded-full h-8 w-8 flex justify-center items-center">
            <i class="relative mdi mdi-alpha-g text-4xl"></i>
          </a>
        </div> -->

      </section>

    </div>

    <!-- <div class="py-6 lg:py-12 text-center text-green-200 px-16 space-y-8">
      <p>
        Copyright 2024 by FocusMassage. All rights reserved
      </p>

      <section class="flex flex-col justify-center items-center pb-12">
        <KylePepButton />
      </section>

    </div> -->
  </div>
</template>


<style scoped></style>