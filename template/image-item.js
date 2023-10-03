import { template } from '/helpers/template.js'
export const imageItem = template`<!-- Item 1 -->
<div class="group item">
  <!-- Desktop Image -->
  <img
    src="${'desktopSrc'}"
    alt=""
    class="hidden w-full duration-200 md:block group-hover:scale-110"
  />
  <!-- Mobile Image -->
  <img
    src="${'mobileSrc'}"
    alt=""
    class="w-full duration-200 md:hidden"
  />
  <!-- Item Gradient -->
  <div class="item-gradient"></div>
  <!-- Item Text -->
  <h5>${'title'}</h5>
</div>`
