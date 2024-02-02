<template>
  <div class="container z-50 relative dark:shadow-lg border-r dark:border-none dark:shadow-gray-400" :class="{'blur' : useTreeStore().treeFullScreen === true}">
    <div class="flex w-full items-center transition-all justify-between text-center bg-cyan "
         :class="{'px-3 py-[33px]' : !activeNav, 'px-6 py-[25px]' : activeNav}">
      <img class="transition-all mx-auto" src="/img/Logo.webp" alt=""
           :class="{'w-[80px]' : activeNav, 'w-[50px]' : !activeNav}">
    </div>
    <div class="py-2 flex flex-col gap-y-4 transition-all duration-300 dark:bg-gray-600 max-h-screen h-screen max-[1150px]:pb-24 overflow-y-auto h-screen "
         :class="{'pl-0' : !activeNav, 'pl-3 max-md:w-full overflow-x-hidden ' : activeNav, 'top-0 fixed dark:shadow-lg dark:shadow-gray-400 dark:border-none border-r': loadCurrentUser.my_scroll>90, 'max-[1151px]:w-[27%] max-[1149px]:w-full max-lg:w-full' : activeNav && loadCurrentUser.my_scroll>100}">
      <HeaderNavLinks :activeNav="activeNav" to="/base/profile">
        <template v-slot:navIcon>
          <svg width="25px" height="25px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4" stroke-width="1.5"/>
            <path
              d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
              stroke="" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Профиль') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks :activeNav="activeNav" to="/base/users">
        <template v-slot:navIcon>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="User / Users_Group">
              <path id="Vector" class="dark:stroke-white stroke-black"
                    d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Пользователи') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav"
                      :to="`/base/tasks`"
                      class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg width="25px" height="25px" class="dark:fill-white fill-black" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.25 8.5C12.8358 8.5 12.5 8.83579 12.5 9.25C12.5 9.66421 12.8358 10 13.25 10H16.75C17.1642 10 17.5 9.66421 17.5 9.25C17.5 8.83579 17.1642 8.5 16.75 8.5H13.25Z"/>
            <path
              d="M12.5001 14.75C12.5001 14.3358 12.8358 14 13.2501 14H16.7499C17.1642 14 17.4999 14.3358 17.4999 14.75C17.4999 15.1642 17.1642 15.5 16.7499 15.5H13.2501C12.8358 15.5 12.5001 15.1642 12.5001 14.75Z"/>
            <path
              d="M10.7803 7.71967C11.0732 8.01256 11.0732 8.48744 10.7803 8.78033L8.78033 10.7803C8.48744 11.0732 8.01256 11.0732 7.71967 10.7803L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934L9.71967 7.71967C10.0126 7.42678 10.4874 7.42678 10.7803 7.71967Z"/>
            <path
              d="M10.7803 14.2803C11.0732 13.9874 11.0732 13.5126 10.7803 13.2197C10.4874 12.9268 10.0126 12.9268 9.71967 13.2197L8.25 14.6893L7.78033 14.2197C7.48744 13.9268 7.01256 13.9268 6.71967 14.2197C6.42678 14.5126 6.42678 14.9874 6.71967 15.2803L7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L10.7803 14.2803Z"/>
            <path
              d="M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Задания') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav"
                      :to="`/base/graph`"
                      class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.99902 3V16.2C2.99902 17.8802 2.99902 18.7202 3.326 19.362C3.61362 19.9265 4.07257 20.3854 4.63705 20.673C5.27879 21 6.11887 21 7.79902 21H20.999M19.9998 15H15.9998M12.9998 7.00002H6.99978M17.9998 11H8.99978" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('График') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav" :to="`/base/tests`"
                      class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg class="dark:fill-white fill-black" width="25px" height="25px" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Тесты') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav" :to="`/base/documents`"
                      class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke-width="1.5"/>
            <path d="M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239" stroke-width="1.5"/>
            <path d="M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239" stroke-width="1.5"/>
            <path d="M9 13H15" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M9 9H15" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M9 17H12" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Документы') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks :activeNav="activeNav" to="/base/companies" class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg class="fill-black dark:fill-white" width="25px" height="25px" viewBox="0 0 50 50"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 2L7 7L2 7L2 46L14 46L14 44L4 44L4 9L9 9L9 4L29 4L29 7L11 7L11 9L34 9L34 20L36 20L36 7L31 7L31 2 Z M 8 12L8 14L12 14L12 12 Z M 17 12L17 14L21 14L21 12 Z M 26 12L26 14L30 14L30 12 Z M 8 17L8 19L12 19L12 17 Z M 17 17L17 19L21 19L21 17 Z M 26 17L26 19L30 19L30 17 Z M 29 20C25.742188 20 23.328125 21.324219 22.074219 23.296875C20.929688 25.09375 20.875 27.339844 21.59375 29.433594C21.515625 29.566406 21.402344 29.679688 21.328125 29.839844C21.171875 30.191406 21.035156 30.589844 21.054688 31.097656L21.054688 31.101563C21.109375 32.378906 21.851563 33.046875 22.398438 33.421875C22.628906 34.640625 23.207031 35.660156 24 36.390625L24 38.53125C23.824219 38.953125 23.472656 39.308594 22.796875 39.679688C22.089844 40.070313 21.132813 40.4375 20.144531 40.917969C19.15625 41.398438 18.125 42.011719 17.324219 42.988281C16.519531 43.96875 16 45.308594 16 47L16 48L48.050781 48L47.992188 46.941406C47.902344 45.363281 47.316406 44.117188 46.488281 43.222656C45.664063 42.328125 44.644531 41.765625 43.679688 41.320313C42.714844 40.875 41.785156 40.535156 41.109375 40.171875C40.464844 39.832031 40.148438 39.511719 40 39.160156L40 37.472656C40.597656 36.609375 40.859375 35.617188 40.9375 34.6875C41.414063 34.265625 41.96875 33.617188 42.125 32.457031C42.230469 31.625 42.019531 30.996094 41.695313 30.464844C42.144531 29.277344 42.328125 27.84375 41.933594 26.417969C41.707031 25.589844 41.277344 24.777344 40.5625 24.171875C40.003906 23.691406 39.238281 23.425781 38.390625 23.308594L37.75 22L37.125 22C36.097656 22 35.085938 22.238281 34.214844 22.578125C33.871094 22.714844 33.558594 22.863281 33.265625 23.027344C33.101563 22.808594 32.921875 22.601563 32.714844 22.414063C32.105469 21.863281 31.261719 21.550781 30.324219 21.421875L29.621094 20 Z M 8 22L8 24L12 24L12 22 Z M 17 22L17 24L19.484375 24L20.761719 22 Z M 28.4375 22.113281L29.027344 23.300781L29.644531 23.300781C30.464844 23.300781 30.96875 23.535156 31.371094 23.894531C31.773438 24.257813 32.066406 24.796875 32.238281 25.429688C32.582031 26.695313 32.289063 28.339844 32.007813 28.792969L31.644531 29.371094L32.050781 29.921875C32.289063 30.238281 32.441406 30.566406 32.363281 31.007813C32.253906 31.625 32.03125 31.707031 31.589844 32.089844L31.257813 32.375L31.246094 32.8125C31.210938 33.792969 30.871094 34.777344 30.300781 35.339844L30 35.632813L30 38.988281L30.058594 39.152344C30.453125 40.25 31.335938 40.933594 32.234375 41.429688C33.132813 41.925781 34.101563 42.289063 34.976563 42.714844C35.851563 43.140625 36.609375 43.625 37.132813 44.261719C37.496094 44.699219 37.71875 45.289063 37.855469 46L18.144531 46C18.28125 45.289063 18.503906 44.699219 18.867188 44.261719C19.390625 43.625 20.148438 43.140625 21.023438 42.714844C21.898438 42.289063 22.867188 41.925781 23.765625 41.429688C24.664063 40.933594 25.546875 40.25 25.941406 39.152344L26 38.988281L26 35.523438L25.5625 35.226563C25.101563 34.914063 24.34375 33.769531 24.238281 32.742188L24.183594 32.1875L23.683594 31.945313C23.398438 31.808594 23.082031 31.753906 23.050781 31.015625C23.050781 31.015625 23.082031 30.824219 23.15625 30.65625C23.234375 30.484375 23.375 30.304688 23.332031 30.347656L23.8125 29.867188L23.542969 29.242188C22.796875 27.523438 22.898438 25.722656 23.761719 24.367188C24.550781 23.125 26.097656 22.269531 28.4375 22.113281 Z M 36.558594 24.113281L37.089844 25.199219L37.714844 25.199219C38.472656 25.199219 38.921875 25.398438 39.265625 25.691406C39.613281 25.984375 39.859375 26.414063 40.003906 26.949219C40.300781 28.019531 40.085938 29.480469 39.746094 30.144531L39.417969 30.796875L39.933594 31.308594C39.867188 31.242188 40.195313 31.785156 40.140625 32.195313C40.011719 33.175781 39.871094 33.113281 39.449219 33.390625L39.03125 33.667969L39 34.171875C38.953125 35.042969 38.515625 36.351563 38.28125 36.589844L38 36.878906L38 39.621094L38.058594 39.78125C38.4375 40.835938 39.296875 41.476563 40.167969 41.9375C41.035156 42.398438 41.980469 42.738281 42.84375 43.136719C43.707031 43.535156 44.476563 43.984375 45.019531 44.578125C45.367188 44.953125 45.601563 45.433594 45.769531 46L39.921875 46C39.757813 44.777344 39.3125 43.765625 38.675781 42.988281C37.875 42.011719 36.84375 41.398438 35.855469 40.917969C34.867188 40.4375 33.910156 40.070313 33.203125 39.679688C32.527344 39.308594 32.175781 38.953125 32 38.53125L32 36.296875C32.691406 35.421875 33.054688 34.390625 33.15625 33.34375C33.542969 33.003906 34.144531 32.417969 34.332031 31.359375C34.484375 30.492188 34.226563 29.785156 33.90625 29.210938C34.4375 27.988281 34.59375 26.460938 34.167969 24.902344C34.164063 24.886719 34.15625 24.871094 34.152344 24.855469C34.367188 24.71875 34.640625 24.5625 34.949219 24.441406C35.4375 24.25 36.007813 24.179688 36.558594 24.113281 Z M 8 27L8 29L12 29L12 27 Z M 17 27L17 29L19.753906 29L19.394531 27 Z M 8 32L8 34L12 34L12 32 Z M 17 32L17 34L20.449219 34L19.613281 32 Z M 8 37L8 39L12 39L12 37 Z M 17 37L17 39L21 39L21 37Z"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p v-if="loadCurrentUser.user.role === 'Администратор сайта'">{{ $t('Компании') }}</p>
          <p v-else>{{ $t('Компания') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav"
                      to="/base/companies/department" class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg class="dark:stroke-white stroke-black" fill="none" width="25px" height="25px" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z"></path>
            <path
              d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z"></path>
            <path
              d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z"></path>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Департаменты') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav" to="/base/tree"
                      class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg class="fill-black dark:fill-white" width="25px" height="25px" viewBox="0 0 32 32" id="icon"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23,9h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2V4H11V3A2,2,0,0,0,9,1H3A2,2,0,0,0,1,3V7A2,2,0,0,0,3,9H9a2,2,0,0,0,2-2V6h4V26a2.0023,2.0023,0,0,0,2,2h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V25a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V17h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V6h4V7A2,2,0,0,0,23,9Zm0-6h6V7H23ZM9,7H3V3H9ZM23,25h6v4H23Zm0-11h6v4H23Z"
              transform="translate(0 0.0049)"/>
            <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill="none" width="32"
                  height="32"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Дерево') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav" to="/base/objects"
                      class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg width="25px" height="25px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke-width="1.3" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M12 12V21" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path
              d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z"
              stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Объекты') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav" to="/base/chat" class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg width="25px" height="25px" class="dark:stroke-white stroke-black" viewBox="0 0 60 60"
               xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000">
            <line x1="16" y1="20" x2="48" y2="20" stroke-width="2"/>
            <line x1="16" y1="30" x2="48" y2="30" stroke-width="2"/>
            <line x1="16" y1="40" x2="48" y2="40" stroke-width="2"/>
            <path
              d="m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z"
              stroke-width="2"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Чат') }}</p>
        </template>
      </HeaderNavLinks>
      <HeaderNavLinks v-if="loadCurrentUser.user.role_en !== 'admin'" :activeNav="activeNav" to="/base/cloud"
                      class="flex items-center gap-x-6">
        <template v-slot:navIcon>
          <svg width="25px" class="dark:stroke-white stroke-black" height="25px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.34 21H6C4.93913 21 3.92172 20.5785 3.17157 19.8284C2.42142 19.0782 2 18.0609 2 17V7C2 5.93913 2.42142 4.92165 3.17157 4.17151C3.92172 3.42136 4.93913 3 6 3H8C8.69805 3.00421 9.38284 3.19101 9.98633 3.54187C10.5898 3.89273 11.091 4.39545 11.44 5C11.797 5.60635 12.3055 6.10947 12.9156 6.46008C13.5256 6.8107 14.2164 6.99678 14.92 7H18C19.0609 7 20.0783 7.42136 20.8284 8.17151C21.5786 8.92165 22 9.93913 22 11V12.5499"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
              d="M20 21C20.663 21.0437 21.3163 20.8223 21.8161 20.3844C22.3159 19.9465 22.6212 19.3279 22.665 18.6649C22.7088 18.0019 22.4873 17.3486 22.0494 16.8489C21.6115 16.3491 20.993 16.0437 20.33 16C20.0949 15.3317 19.6309 14.768 19.0201 14.409C18.4092 14.0501 17.6911 13.9189 16.9928 14.0387C16.2945 14.1585 15.6612 14.5215 15.2049 15.0635C14.7487 15.6055 14.4989 16.2915 14.5 17C13.9696 17 13.4609 17.2107 13.0858 17.5858C12.7107 17.9609 12.5 18.4696 12.5 19C12.5 19.5304 12.7107 20.0391 13.0858 20.4142C13.4609 20.7892 13.9696 21 14.5 21H20Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <template v-slot:navLink>
          <p>{{ $t('Облако') }}</p>
        </template>
      </HeaderNavLinks>
      <div class=" h-full transition-all duration-500" :class="{'mx-auto' : !activeNav}">
        <TheButton class="rounded-full flex items-center gap-x-2 hover:dark:bg-cyan hover:bg-cyan transition-all duration-200 p-2"
                   @click="logOut()">
         <div>
           <svg width="30px" class="stroke-red-400" height="30px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
             <path
               d="M9 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H9"
               stroke-width="1.5"/>
             <path
               d="M9 6.4764C9 4.18259 9 3.03569 9.70725 2.4087C10.4145 1.78171 11.4955 1.97026 13.6576 2.34736L15.9864 2.75354C18.3809 3.17118 19.5781 3.37999 20.2891 4.25826C21 5.13652 21 6.40672 21 8.94711V15.0529C21 17.5933 21 18.8635 20.2891 19.7417C19.5781 20.62 18.3809 20.8288 15.9864 21.2465L13.6576 21.6526C11.4955 22.0297 10.4145 22.2183 9.70725 21.5913C9 20.9643 9 19.8174 9 17.5236V6.4764Z"
               stroke-width="1.5"/>
             <path d="M12 11V13" stroke-width="1.5" stroke-linecap="round"/>
           </svg>
         </div>
          <p v-if="activeNav" class="font-medium dark:text-white text-black">{{$t("Выйти")}}</p>
        </TheButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import {useRouter} from "vue-router";
import {useTaskList} from "~/stores/tasks";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";
import {useTreeStore} from "~/stores/tree";

const loadCurrentUser = useAuthStore()
const taskList = useTaskList()
const company = useCompanies()
const router = useRouter()
const props = defineProps({
  activeNav: {
    type: Boolean,
    default: false,
  },
})
const logOut = () => {
  localStorage.removeItem('token')
  router.push('/')
}
onMounted(() => {
  window.onscroll = (e) => {
    (loadCurrentUser.my_scroll) = window.scrollY;
  }
})

</script>

<style scoped lang="scss">
*{
  ::-webkit-scrollbar{
    display: none;
  }
}
</style>