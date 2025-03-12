<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";

</script>

<template>
  <div class="space-y-8 lg:space-y-16">

    <SectionLayout width="xl">
      <div class="bg-linear-to-b from-fbLight to-fbGray min-h-96">

        <div class="max-w-7xl mx-auto py-4 lg:py-8 px-8 space-y-8">
          <h1 class="text-2xl lg:text-4xl text-green-100 font-bold">
            About
            <mark class="text-fbGreen bg-transparent">4 Bar M Construction</mark>
          </h1>
          <p class="text-sm lg:text-lg lg:w-2/3 text-white">
            4 Bar M Construction is led by a team with over 30 years of experience in the federal market providing
            outstanding service in some of the most challenging environments. The management team has experience working
            with DoD, GSA, Department of Interior, NASA. 4 Bar M Construction is a Service Disabled Veteran Owned Small
            Business
          </p>

        </div>
      </div>
    </SectionLayout>

    <SectionLayout width="base">
      <h2 class="max-w-7xl mx-auto text-4xl font-bold text-fbGreen border-b-4 border-fbGreen pb-4 pt-32 mb-16">
        About the Owner
      </h2>
      <div class="flex flex-col lg:flex-row max-w-7xl mx-auto gap-16 p-8">

        <img
          src="https://images.unsplash.com/photo-1554311884-415bfda22b47?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" class="h-64 lg:h-96 w-64 lg:w-96 object-center object-cover rounded">

        <div class="space-y-16 text-fbGreen">
          <div class="">
            <h2 class="text-3xl font-bold mb-8">
              Jeff McBride
            </h2>

            <p class="text-lg pb-4">
              Founder and owner Jeff McBride has over 30 years of experience working with the federal government in
              construction, engineering, and facility operations. He started out in residential construction, and upon
              graduating with a degree in Civil Engineering, he joined the Air Force as a civil engineering officer.
              Throughout his career in the Air Force, he held a number of positions, including facility project
              programmer, emergency manager, military construction program manager, and installation maintenance
              operations manager. He also led the DoD Fire Training Academy and finished his career as Deputy Director
              for Installations, Air Forces Central Command. He completed three deployments to the Middle East and one
              to El Salvador, where he helped build two schools.
            </p>
            <p class="text-lg pb-4">
              Upon leaving the military, he joined an Alaskan Native company as the Director of Base Support Operations
              at the Air Force Test Center in Tennessee. He later worked as a program manager and subsidiary president,
              leading contracts with various government agencies, including the Army, Navy, Air Force, GSA, NASA, and
              the Department of the Interior, performing both construction and facility operations. These contracts
              spanned from Washington, D.C., to Midway Island in the Pacific.
            </p>
            <p class="text-lg">
              After departing the Alaskan Native company, he founded 4 Bar M Construction to focus on federal government
              construction, specializing in remote and challenging projects.
            </p>
          </div>


          <ul class="space-y-8">
            <a href="tel:2089998966" class="flex items-center bg-fbGreen py-1 text-white rounded">
              <i class="mdi mdi-phone text-xs lg:text-2xl px-4 lg:px-8"></i>
              208-999-8966
            </a>

            <a href="mailto:jeff.mcbride@4barmconstruction.com"
              class="hidden lg:flex items-center bg-fbGreen py-1 text-white rounded">
              <i class="mdi mdi-email text-xs lg:text-2xl px-4 lg:px-8"></i>
              jeff.mcbride@4barmconstruction.com
            </a>

            <a href="mailto:jeff.mcbride@4barmconstruction.com"
              class="flex lg:hidden items-center bg-fbGreen py-1 text-white rounded">
              <i class="mdi mdi-email text-xs lg:text-2xl px-4 lg:px-8"></i>
              Send an email
            </a>

            <li class="font-semibold text-sm lg:text-xl">
              PO Box 443, Eagle ID 83616
            </li>
          </ul>
        </div>


      </div>
    </SectionLayout>

  </div>
</template>
