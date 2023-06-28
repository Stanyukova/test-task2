import React from 'react'

const StatusBar = () => {
  return (
    <div className="status-bar bar">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="121"
        height="16"
        viewBox="0 0 121 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87.9958 4.52088C89.9355 4.52088 91.7034 5.23545 93.0589 6.40718L94 5.36811C92.3946 3.97447 90.2979 3 87.9958 3C85.6971 3 83.6034 3.97151 82 5.36071L82.9391 6.40126C84.2936 5.23299 86.0585 4.52088 87.9958 4.52088V4.52088Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87.9958 7.5202C89.1583 7.5202 90.2204 7.94233 91.0396 8.63768L92.0352 7.53795C90.9516 6.60787 89.5422 6.00031 87.9958 6.00031C86.4523 6.00031 85.0439 6.60639 83.9613 7.53351L84.9554 8.63472C85.7741 7.94085 86.8347 7.5202 87.9958 7.5202V7.5202Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.0435 9.73743C89.4892 9.27732 88.7755 8.95874 87.9952 8.95874C87.2165 8.95874 86.5038 9.27682 85.9495 9.73496L87.9952 12L90.0435 9.73743V9.73743Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 10.5C8.26878 10.5 9.5 9.26878 9.5 7.75C9.5 6.23122 8.26878 5 6.75 5C5.23122 5 4 6.23122 4 7.75C4 9.26878 5.23122 10.5 6.75 10.5Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.75 10.5C15.2688 10.5 16.5 9.26878 16.5 7.75C16.5 6.23122 15.2688 5 13.75 5C12.2312 5 11 6.23122 11 7.75C11 9.26878 12.2312 10.5 13.75 10.5Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.75 10.5C22.2688 10.5 23.5 9.26878 23.5 7.75C23.5 6.23122 22.2688 5 20.75 5C19.2312 5 18 6.23122 18 7.75C18 9.26878 19.2312 10.5 20.75 10.5Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.75 10C28.9926 10 30 8.99264 30 7.75C30 6.50736 28.9926 5.5 27.75 5.5C26.5074 5.5 25.5 6.50736 25.5 7.75C25.5 8.99264 26.5074 10 27.75 10ZM27.75 10.5C26.2312 10.5 25 9.26878 25 7.75C25 6.23122 26.2312 5 27.75 5C29.2688 5 30.5 6.23122 30.5 7.75C30.5 9.26878 29.2688 10.5 27.75 10.5Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.75 10C35.9926 10 37 8.99264 37 7.75C37 6.50736 35.9926 5.5 34.75 5.5C33.5074 5.5 32.5 6.50736 32.5 7.75C32.5 8.99264 33.5074 10 34.75 10ZM34.75 10.5C33.2312 10.5 32 9.26878 32 7.75C32 6.23122 33.2312 5 34.75 5C36.2688 5 37.5 6.23122 37.5 7.75C37.5 9.26878 36.2688 10.5 34.75 10.5Z"
          fill="black"
        />
        <path
          d="M41.5254 2.89258H47.4961V3.94727H42.6914V6.56055H46.916V7.58594H42.6914V11.5H41.5254V2.89258ZM48.6094 5.25391H49.6816V11.5H48.6094V5.25391ZM48.6094 2.89258H49.6816V4.08789H48.6094V2.89258ZM53.4961 5.11328C53.9883 5.11328 54.418 5.23438 54.7852 5.47656C54.9844 5.61328 55.1875 5.8125 55.3945 6.07422V5.2832H56.3672V10.9902C56.3672 11.7871 56.25 12.416 56.0156 12.877C55.5781 13.7285 54.752 14.1543 53.5371 14.1543C52.8613 14.1543 52.293 14.002 51.832 13.6973C51.3711 13.3965 51.1133 12.9238 51.0586 12.2793H52.1309C52.1816 12.5605 52.2832 12.7773 52.4355 12.9297C52.6738 13.1641 53.0488 13.2812 53.5605 13.2812C54.3691 13.2812 54.8984 12.9961 55.1484 12.4258C55.2969 12.0898 55.3652 11.4902 55.3535 10.627C55.1426 10.9473 54.8887 11.1855 54.5918 11.3418C54.2949 11.498 53.9023 11.5762 53.4141 11.5762C52.7344 11.5762 52.1387 11.3359 51.627 10.8555C51.1191 10.3711 50.8652 9.57227 50.8652 8.45898C50.8652 7.4082 51.1211 6.58789 51.6328 5.99805C52.1484 5.4082 52.7695 5.11328 53.4961 5.11328ZM55.3945 8.33594C55.3945 7.55859 55.2344 6.98242 54.9141 6.60742C54.5938 6.23242 54.1855 6.04492 53.6895 6.04492C52.9473 6.04492 52.4395 6.39258 52.166 7.08789C52.0215 7.45898 51.9492 7.94531 51.9492 8.54688C51.9492 9.25391 52.0918 9.79297 52.377 10.1641C52.666 10.5312 53.0527 10.7148 53.5371 10.7148C54.2949 10.7148 54.8281 10.373 55.1367 9.68945C55.3086 9.30273 55.3945 8.85156 55.3945 8.33594ZM57.9609 5.22461H59.0039V6.11523C59.2539 5.80664 59.4805 5.58203 59.6836 5.44141C60.0312 5.20312 60.4258 5.08398 60.8672 5.08398C61.3672 5.08398 61.7695 5.20703 62.0742 5.45312C62.2461 5.59375 62.4023 5.80078 62.543 6.07422C62.7773 5.73828 63.0527 5.49023 63.3691 5.33008C63.6855 5.16602 64.041 5.08398 64.4355 5.08398C65.2793 5.08398 65.8535 5.38867 66.1582 5.99805C66.3223 6.32617 66.4043 6.76758 66.4043 7.32227V11.5H65.3086V7.14062C65.3086 6.72266 65.2031 6.43555 64.9922 6.2793C64.7852 6.12305 64.5312 6.04492 64.2305 6.04492C63.8164 6.04492 63.459 6.18359 63.1582 6.46094C62.8613 6.73828 62.7129 7.20117 62.7129 7.84961V11.5H61.6406V7.4043C61.6406 6.97852 61.5898 6.66797 61.4883 6.47266C61.3281 6.17969 61.0293 6.0332 60.5918 6.0332C60.1934 6.0332 59.8301 6.1875 59.502 6.49609C59.1777 6.80469 59.0156 7.36328 59.0156 8.17188V11.5H57.9609V5.22461ZM68.7656 9.83008C68.7656 10.1348 68.877 10.375 69.0996 10.5508C69.3223 10.7266 69.5859 10.8145 69.8906 10.8145C70.2617 10.8145 70.6211 10.7285 70.9688 10.5566C71.5547 10.2715 71.8477 9.80469 71.8477 9.15625V8.30664C71.7188 8.38867 71.5527 8.45703 71.3496 8.51172C71.1465 8.56641 70.9473 8.60547 70.752 8.62891L70.1133 8.71094C69.7305 8.76172 69.4434 8.8418 69.252 8.95117C68.9277 9.13477 68.7656 9.42773 68.7656 9.83008ZM71.3203 7.69727C71.5625 7.66602 71.7246 7.56445 71.8066 7.39258C71.8535 7.29883 71.877 7.16406 71.877 6.98828C71.877 6.62891 71.748 6.36914 71.4902 6.20898C71.2363 6.04492 70.8711 5.96289 70.3945 5.96289C69.8438 5.96289 69.4531 6.11133 69.2227 6.4082C69.0938 6.57227 69.0098 6.81641 68.9707 7.14062H67.9863C68.0059 6.36719 68.2559 5.83008 68.7363 5.5293C69.2207 5.22461 69.7812 5.07227 70.418 5.07227C71.1562 5.07227 71.7559 5.21289 72.2168 5.49414C72.6738 5.77539 72.9023 6.21289 72.9023 6.80664V10.4219C72.9023 10.5312 72.9238 10.6191 72.9668 10.6855C73.0137 10.752 73.1094 10.7852 73.2539 10.7852C73.3008 10.7852 73.3535 10.7832 73.4121 10.7793C73.4707 10.7715 73.5332 10.7617 73.5996 10.75V11.5293C73.4355 11.5762 73.3105 11.6055 73.2246 11.6172C73.1387 11.6289 73.0215 11.6348 72.873 11.6348C72.5098 11.6348 72.2461 11.5059 72.082 11.248C71.9961 11.1113 71.9355 10.918 71.9004 10.668C71.6855 10.9492 71.377 11.1934 70.9746 11.4004C70.5723 11.6074 70.1289 11.7109 69.6445 11.7109C69.0625 11.7109 68.5859 11.5352 68.2148 11.1836C67.8477 10.8281 67.6641 10.3848 67.6641 9.85352C67.6641 9.27148 67.8457 8.82031 68.209 8.5C68.5723 8.17969 69.0488 7.98242 69.6387 7.9082L71.3203 7.69727Z"
          fill="black"
        />
      </svg>
    </div>
    <div>9:42 AM</div>
    <div className="status-bar">
      <div>42%</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="11"
          viewBox="0 0 25 11"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.00246 1.02632C1.44721 1.02632 1 1.49554 1 2.07901V8.92099C1 9.50189 1.44906 9.97368 2.00246 9.97368H21.4975C22.0528 9.97368 22.5 9.50446 22.5 8.92099V2.07901C22.5 1.49811 22.0509 1.02632 21.4975 1.02632H2.00246ZM2.00246 0.5H21.4975C22.3266 0.5 23 1.20695 23 2.07901V8.92099C23 9.79682 22.3273 10.5 21.4975 10.5H2.00246C1.17338 10.5 0.5 9.79305 0.5 8.92099V2.07901C0.5 1.20318 1.17267 0.5 2.00246 0.5Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 1.5C1.72386 1.5 1.5 1.72386 1.5 2V9C1.5 9.27614 1.72386 9.5 2 9.5H10.5V1.5H2Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 5.73228C25 6.6139 24.3481 7.34325 23.5 7.46456V4C24.3481 4.12131 25 4.85066 25 5.73228Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  </div>
  )
}

export default StatusBar