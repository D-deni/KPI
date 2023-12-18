<template>
  <div class="flex items-center max-md:justify-center gap-x-8">
    <div class="cursor-pointer transition-all duration-300" @click="()=> {
          if(colorMode.preference && colorMode.value === 'light') {
            colorMode.value = 'dark'
            colorMode.preference = 'dark'
          }
          else {
            colorMode.preference = 'light'
            colorMode.value = 'light'
          }
        }">
      <div class="hover:rounded-full hover:bg-gray-100 max-[800px]:p-2 transition-all"
           v-if="colorMode.preference === 'light'">
        <svg version="1.1" width="30px" height="30px" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 438.2 438.2" xml:space="preserve">
              <g>
                  <g id="XMLID_2_">
                    <g>
                      <path style="fill:#F4581B;" d="M327.884,124.839c32.8,18.61,54.92,53.85,54.92,94.26s-22.12,75.65-54.92,94.25
                        c-42.33-10.46-73.71-48.69-73.71-94.25c0-45.57,31.38-83.79,73.71-94.25V124.839z"/>
                      <path style="fill:#F7CF52;" d="M327.884,124.839v0.01c-42.33,10.46-73.71,48.68-73.71,94.25c0,45.56,31.38,83.79,73.71,94.25
                        c-15.76,8.95-33.98,14.06-53.39,14.06c-59.82,0-108.31-48.49-108.31-108.31s48.49-108.32,108.31-108.32
                        C293.904,110.779,312.124,115.889,327.884,124.839z"/>
                    </g>
                  </g>
                <rect x="266.996" y="348.358" style="fill:#F7CF52;" width="15" height="89.842"/>
                <rect x="266.996" style="fill:#F7CF52;" width="15" height="89.842"/>

                <rect x="143.838" y="297.341" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 16.3354 691.2888)"
                      style="fill:#F7CF52;" width="15" height="89.841"/>
                <rect x="55.396" y="211.6" style="fill:#F7CF52;" width="89.842" height="15"/>

                <rect x="106.412" y="88.435" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 190.5049 270.7802)"
                      style="fill:#F7CF52;" width="89.841" height="15"/>
                <g>

                      <rect x="313.124" y="347.297" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 129.4419 796.0912)"
                            style="fill:#F4581B;" width="35.174" height="15"/>

                  <rect x="200.701" y="75.897" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 224.7537 316.9841)"
                        style="fill:#F4581B;" width="35.174" height="15"/>

                  <rect x="210.785" y="337.209" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 284.2135 766.1119)"
                        style="fill:#F4581B;" width="15" height="35.174"/>

                  <rect x="323.201" y="65.81" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 604.3321 286.9755)"
                        style="fill:#F4581B;" width="15" height="35.174"/>

                  <rect x="131.296" y="257.715" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 -62.4538 508.8688)"
                        style="fill:#F4581B;" width="15" height="35.174"/>

                  <rect x="121.209" y="155.389" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 204.7084 366.4883)"
                        style="fill:#F4581B;" width="35.174" height="15"/>
                  </g>
                </g>
            </svg>
      </div>
      <div v-else
           class="hover:dark:bg-gray-500 hover:rounded-full hover:bg-gray-100 hover:p-2 max-[800px]:p-2 transition-all">
        <svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 380.446 380.446" xml:space="preserve">
              <g>
                <path style="fill:#F7CF52;" d="M363.262,116.333c-2.68-1.227-6.508-2.734-11.101-4.075c-4.594-1.346-9.953-2.546-15.695-3.34
                  c-2.472-0.353-5.024-0.611-7.607-0.81c-0.199-2.583-0.457-5.135-0.81-7.607c-0.795-5.742-1.994-11.101-3.34-15.695
                  c-1.341-4.594-2.848-8.422-4.075-11.101c-1.214-2.68-2.16-4.211-2.16-4.211s-0.946,1.531-2.16,4.211
                  c-1.227,2.679-2.734,6.508-4.075,11.101c-1.347,4.594-2.546,9.953-3.34,15.695c-0.352,2.466-0.609,5.011-0.808,7.589
                  c-2.584,0.196-5.136,0.451-7.609,0.802c-2.871,0.399-5.646,0.892-8.278,1.456c-2.632,0.552-5.12,1.229-7.417,1.881
                  c-2.297,0.684-4.402,1.386-6.268,2.087c-1.866,0.706-3.493,1.383-4.833,2.005c-2.68,1.22-4.211,2.172-4.211,2.172
                  s1.531,0.952,4.211,2.172c1.34,0.622,2.967,1.299,4.833,2.005c1.866,0.702,3.972,1.404,6.268,2.088
                  c2.297,0.652,4.785,1.329,7.417,1.881c2.632,0.565,5.407,1.057,8.278,1.456c2.467,0.349,5.013,0.604,7.59,0.8
                  c0.196,2.577,0.451,5.124,0.8,7.59c0.399,2.871,0.891,5.646,1.456,8.278c0.552,2.632,1.229,5.12,1.881,7.417
                  c0.684,2.297,1.386,4.402,2.088,6.269c0.706,1.866,1.383,3.493,2.005,4.833c1.22,2.68,2.172,4.211,2.172,4.211
                  s0.952-1.531,2.172-4.211c0.622-1.34,1.299-2.967,2.005-4.833c0.701-1.866,1.404-3.972,2.088-6.269
                  c0.651-2.297,1.328-4.785,1.881-7.417c0.565-2.632,1.057-5.407,1.456-8.278c0.35-2.473,0.606-5.025,0.802-7.609
                  c2.577-0.199,5.122-0.457,7.589-0.808c5.742-0.794,11.101-1.994,15.695-3.34c4.594-1.341,8.422-2.848,11.101-4.075
                  c2.68-1.214,4.211-2.16,4.211-2.16S365.942,117.547,363.262,116.333z"/>
                <path style="fill:#F7CF52;" d="M299.845,229.947c-0.41-0.309-1.012-0.843-1.777-1.362c-1.531-1.083-3.719-2.415-6.344-3.599
                  c-2.625-1.189-5.687-2.248-8.969-2.95c-0.504-0.111-1.022-0.197-1.535-0.291c-0.094-0.513-0.179-1.031-0.29-1.535
                  c-0.702-3.281-1.76-6.344-2.95-8.969c-1.184-2.625-2.515-4.813-3.599-6.344c-0.519-0.766-1.053-1.367-1.362-1.777
                  c-0.332-0.41-0.546-0.629-0.546-0.629s-0.213,0.219-0.546,0.629c-0.309,0.41-0.843,1.012-1.362,1.777
                  c-1.083,1.531-2.414,3.719-3.599,6.344c-1.189,2.625-2.248,5.687-2.95,8.969c-0.109,0.497-0.194,1.007-0.286,1.513
                  c-0.515,0.093-1.034,0.178-1.539,0.289c-1.641,0.353-3.227,0.787-4.73,1.286c-1.504,0.488-2.926,1.086-4.238,1.661
                  c-1.313,0.604-2.516,1.224-3.582,1.844c-1.066,0.623-1.996,1.221-2.762,1.771c-0.766,0.523-1.367,1.058-1.777,1.37
                  c-0.41,0.334-0.629,0.549-0.629,0.549s0.219,0.215,0.629,0.549c0.41,0.311,1.012,0.847,1.777,1.37
                  c0.766,0.549,1.695,1.147,2.762,1.771c1.066,0.62,2.27,1.24,3.582,1.843c1.313,0.576,2.734,1.173,4.238,1.661
                  c1.504,0.499,3.09,0.934,4.73,1.286c0.498,0.109,1.01,0.193,1.517,0.285c0.092,0.507,0.176,1.019,0.285,1.517
                  c0.353,1.641,0.787,3.226,1.286,4.73c0.488,1.504,1.086,2.926,1.661,4.238c0.604,1.313,1.224,2.516,1.844,3.582
                  c0.623,1.066,1.221,1.996,1.771,2.762c0.522,0.766,1.058,1.367,1.369,1.777c0.334,0.41,0.549,0.629,0.549,0.629
                  s0.215-0.219,0.549-0.629c0.311-0.41,0.847-1.012,1.369-1.777c0.549-0.766,1.147-1.695,1.771-2.762
                  c0.619-1.066,1.24-2.27,1.844-3.582c0.575-1.313,1.173-2.734,1.661-4.238c0.499-1.504,0.933-3.09,1.286-4.73
                  c0.111-0.506,0.196-1.024,0.289-1.54c0.506-0.092,1.016-0.177,1.513-0.286c3.281-0.702,6.344-1.76,8.969-2.95
                  c2.625-1.184,4.813-2.515,6.344-3.599c0.766-0.519,1.367-1.053,1.777-1.362c0.41-0.333,0.629-0.546,0.629-0.546
                  S300.255,230.279,299.845,229.947z"/>
                <path style="fill:#F7CF52;" d="M71.311,47.918c-0.432-0.325-1.066-0.888-1.873-1.434c-1.613-1.142-3.918-2.544-6.683-3.792
                  c-2.766-1.253-5.992-2.368-9.449-3.108c-0.531-0.117-1.076-0.207-1.617-0.306c-0.099-0.541-0.189-1.086-0.306-1.617
                  c-0.739-3.457-1.855-6.683-3.108-9.449c-1.248-2.766-2.65-5.07-3.791-6.684c-0.547-0.806-1.11-1.44-1.435-1.872
                  c-0.35-0.432-0.575-0.663-0.575-0.663s-0.225,0.23-0.575,0.663c-0.325,0.432-0.888,1.066-1.435,1.872
                  c-1.141,1.613-2.544,3.918-3.791,6.684c-1.253,2.766-2.369,5.992-3.108,9.449c-0.115,0.523-0.204,1.061-0.301,1.594
                  c-0.543,0.098-1.089,0.188-1.622,0.304c-1.728,0.372-3.399,0.83-4.984,1.355c-1.584,0.514-3.083,1.144-4.465,1.75
                  c-1.383,0.636-2.65,1.29-3.774,1.942c-1.124,0.657-2.103,1.286-2.91,1.865c-0.807,0.551-1.44,1.115-1.873,1.443
                  c-0.432,0.352-0.663,0.578-0.663,0.578s0.23,0.227,0.663,0.578c0.432,0.328,1.066,0.892,1.873,1.443
                  c0.807,0.579,1.786,1.209,2.91,1.865c1.124,0.653,2.391,1.306,3.774,1.942c1.383,0.606,2.881,1.236,4.465,1.75
                  c1.584,0.525,3.255,0.983,4.984,1.355c0.525,0.115,1.064,0.203,1.598,0.3c0.097,0.534,0.185,1.073,0.3,1.598
                  c0.372,1.729,0.829,3.399,1.355,4.984c0.514,1.584,1.144,3.083,1.75,4.465c0.636,1.383,1.29,2.65,1.942,3.774
                  c0.656,1.124,1.287,2.103,1.865,2.909c0.551,0.807,1.115,1.44,1.443,1.873c0.352,0.432,0.578,0.663,0.578,0.663
                  s0.227-0.23,0.578-0.663c0.328-0.432,0.892-1.066,1.443-1.873c0.579-0.807,1.209-1.786,1.865-2.909
                  c0.653-1.124,1.306-2.391,1.942-3.774c0.606-1.383,1.236-2.881,1.75-4.465c0.526-1.584,0.983-3.255,1.355-4.984
                  c0.116-0.532,0.206-1.079,0.304-1.622c0.533-0.097,1.071-0.186,1.594-0.301c3.457-0.739,6.683-1.855,9.449-3.108
                  c2.766-1.248,5.07-2.65,6.683-3.792c0.807-0.547,1.44-1.109,1.873-1.435c0.432-0.35,0.663-0.575,0.663-0.575
                  S71.743,48.268,71.311,47.918z"/>
                <g>
                  <path style="fill:#F7CF52;" d="M257.193,0c21.254,0,41.693,3.488,60.778,9.919c-75.252,25.357-129.446,96.501-129.446,180.304
                    c0,83.804,54.193,154.947,129.446,180.304c-19.085,6.431-39.524,9.919-60.778,9.919c-105.058,0-190.224-85.166-190.224-190.224
                    S152.136,0,257.193,0z"/>
                </g>
                <path style="fill:#E2BC50;" d="M257.2,0.003c5.8,0,11.54,0.26,17.2,0.77c-96.95,8.74-172.93,90.22-172.93,189.45
                  c0,99.25,76.01,180.74,172.99,189.45c-5.68,0.51-11.44,0.77-17.26,0.77c-105.06,0-190.23-85.16-190.23-190.22
                  S152.14,0.003,257.2,0.003z"/>
              </g>
            </svg>
      </div>
    </div>
    <NuxtLink :to="'/base/chat'" :class="{'!bg-opacity-0 hover:!bg-opacity-100 border-none' : route.path === '/base/chat' || route.path === `/base/chat/${route.params.id}`}"
      class="hover:bg-gray-100 dark:hover:bg-gray-500 hover:rounded-full px-2 py-2 transition-all cursor-pointer">
      <svg width="25px" height="25px" class="dark:stroke-white stroke-black" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" data-v-inspector="components/TheHeader.vue:163:11"><line x1="16" y1="20" x2="48" y2="20" stroke-width="2" data-v-inspector="components/TheHeader.vue:165:13"></line><line x1="16" y1="30" x2="48" y2="30" stroke-width="2" data-v-inspector="components/TheHeader.vue:166:13"></line><line x1="16" y1="40" x2="48" y2="40" stroke-width="2" data-v-inspector="components/TheHeader.vue:167:13"></line><path d="m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z" stroke-width="2" data-v-inspector="components/TheHeader.vue:168:13"></path></svg>
    </NuxtLink>
    <div class="relative">
      <div
        @click="loadCurrentUser.openNotification = !loadCurrentUser.openNotification; loadCurrentUser.openSettings = false"
        class="hover:bg-gray-100 dark:hover:bg-gray-500 hover:rounded-full hover:p-2 p-2 max-[800px]:p-2 transition-all cursor-pointer">
        <div class="relative">
          <svg class="dark:fill-white fill-gray-500" height="25" width="25" version="1.1" id="Capa_1"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 611.999 611.999" xml:space="preserve">
              <g>
            <g>
              <g>
                <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203
                  C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578
                  c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626
                  h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856
                  c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626
                  C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32
                  c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082
                  c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z
                   M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826
                  c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485
                  c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"/>
                <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258
                  c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258
                  C323.259,126.96,315.532,119.235,306.001,119.235z"/>
              </g>
            </g>
          </g>
          </svg>
          <div v-if="readCount !== 0" class="text-center text-[10px] rounded-full  absolute -top-[2px] -right-[2px]">
            <div
              class="animate-ping absolute inline-flex w-full h-full min-w-[14px] min-h-[14px] max-w-full max-h-full rounded-full bg-sky-400 opacity-75"/>
            <div
              class="relative inline-flex justify-center rounded-full min-w-[14px] min-h-[14px] max-w-full max-h-full w-full h-full bg-sky-500 text-white">
              {{readCount}}
            </div>
          </div>
        </div>
      </div>
      <Transition
        name="slide-fade"
        class="absolute w-[500px] max-md:fixed max-md:left-0 right-0 p-4 z-[100] top-12 max-[800px]:top-0 max-[800px]:h-screen max-[800px]:w-screen max-[800px]:-right-10 dark:shadow-white dark:shadow-md transition-all duration-200 rounded-md shadow-lg bg-gray-100 dark:bg-gray-600"
        :class="{'min-h-full' : loadCurrentUser.openNotification === true, 'min-h-0 opacity-0' : loadCurrentUser.openNotification === false}">
        <HeaderContentNotification class="select-none " v-if="loadCurrentUser.openNotification" :key="readCount"
                                   @openNotification="loadCurrentUser.openNotification = false"/>
      </Transition>
    </div>

    <div
      class="flex max-[800px]:hidden select-none text-gray-600 items-center transition-all duration-200 gap-x-2 cursor-pointer hover:transform hover:-translate-y-2"
      @click="loadCurrentUser.openSettings = !loadCurrentUser.openSettings; loadCurrentUser.openNotification = false">
      <div v-if="loadCurrentUser.user.id" class="">
        <img class="w-[50px] h-[50px] rounded-full shadow-lg border border-gray-100 dark:border-none"
             :src="loadCurrentUser.get_server_domain + loadCurrentUser.user.photo_url" alt="">
      </div>
      <div v-else class="flex items-center gap-x-2">
        <sceleton border-radius="100px" width="50px" height="50px"></sceleton>
        <sceleton border-radius="5px" width="150px" height="15px"></sceleton>
      </div>
      <h3 class="dark:text-white select-none tracking-wider">{{ loadCurrentUser.user.first_name }}
        {{ loadCurrentUser.user.last_name }}</h3>

    </div>

    <div class="relative max-md:hidden">

      <div @click="loadCurrentUser.openSettings = !loadCurrentUser.openSettings; loadCurrentUser.openNotification = false"
           class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1">
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="dark:stroke-white" cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
          <path
            d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273"
            stroke="#1C274C" class="dark:stroke-white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <Transition
        name="slide-fade"
        class="absolute max-md:fixed max-md:left-0 right-0 p-4 z-[100] top-12 max-[800px]:-top-0 max-[800px]:h-screen max-[800px]:w-screen max-[800px]:-right-10 dark:shadow-white dark:shadow-md transition-all duration-200 rounded-md shadow-lg bg-gray-100 dark:bg-gray-600 w-[300px]"
        :class="{'min-h-full' : loadCurrentUser.openSettings === true, 'min-h-0 opacity-0 ' : loadCurrentUser.openSettings === false}">
        <div v-if="loadCurrentUser.openSettings" class="flex flex-col gap-y-6 select-none">
          <div class="ml-auto justify-end hidden w-2/12 max-[800px]:flex" @click="loadCurrentUser.openSettings = false">
            <svg width="25px" height="25px" class="fill-gray-400 dark:fill-white" viewBox="-2 0 32 32" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="Icon-Set" transform="translate(-466.000000, -931.000000)">
                  <path
                    d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z"
                    id="arrow-top">
                  </path>
                </g>
              </g>
            </svg>
          </div>
          <HeaderContentLink>
            <template v-slot:headerContentIcon>
              <div>
                <svg width="30px" height="30px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_503_2726)">
                    <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5"
                          stroke-width="0.5"/>
                    <mask id="mask0_503_2726" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                          width="28" height="20">
                      <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white"
                            stroke-width="0.5"/>
                    </mask>
                    <g mask="url(#mask0_503_2726)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z"
                            fill="#0C47B7"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_503_2726">
                      <rect width="28" height="20" rx="2" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </template>
            <template v-slot:headerContentText>
              <h3>{{ $t('Русский') }}</h3>
            </template>
          </HeaderContentLink>
          <HeaderContentLink to="profile">
            <template v-slot:headerContentIcon>
              <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z"
                />
              </svg>
            </template>
            <template v-slot:headerContentText>{{ $t('Личная информация') }}</template>
          </HeaderContentLink>
          <HeaderContentLink to="companies">
            <template v-slot:headerContentIcon>
              <svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <path
                  d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"/>
              </svg>
            </template>
            <template v-slot:headerContentText>
              {{ $t('Информация о Компании') }}
            </template>
          </HeaderContentLink>
          <HeaderContentLink to="tasks">
            <template v-slot:headerContentIcon>
              <svg width="30px" class="dark:stroke-white stroke-black" height="30px" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M12.37 8.87988H17.62" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.37 15.8799H17.62" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            <template v-slot:headerContentText>{{ $t('Мои задания') }}</template>
          </HeaderContentLink>
          <TheButton class="rounded-full py-2" :type="'danger'" @click="nuxtStorage.localStorage.removeItem('token'); router.push('/')">
            {{ $t('Выйти') }}
          </TheButton>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth";
import {useNotification} from "~/stores/notification";
import {useRoute} from "vue-router";
import HeaderContentNotification from "~/components/Header/HeaderUI/HeaderContentNotification.vue";
import TheButton from "~/components/UI/TheButton.vue";
import HeaderContentLink from "~/components/Header/HeaderUI/HeaderContentLink.vue";
import Sceleton from "~/components/UI/TheSceleton.vue";
import {useRouter} from "vue-router";
import nuxtStorage from "nuxt-storage/nuxt-storage";

const route = useRoute()
const router = useRouter()
const loadNotification = useNotification()
const loadCurrentUser = useAuthStore()
const colorMode = useColorMode()
let readCount = 0

watchSyncEffect(()=>{
  for (let i = 0; i < loadNotification.get_notification?.length; i++){
    if(loadNotification.get_notification[i]?.read === false){
      readCount += 1
    }
  }
})
onMounted(()=> {
  loadNotification.loadNotification()
})
</script>

<style lang="scss">

</style>