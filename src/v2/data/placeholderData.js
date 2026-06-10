// Placeholder data for components that were importing from deleted aboutData

export const getActivitiesData = (t) => [
  {
    id: 1,
    title: t("act_1_title"),
    description: t("act_2_des"),
    date: t("act_1_date"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/news/act1.webp`
  },
  {
    id: 2,
    title: t("act_2_title"),
    description: t("act_2_des"),
    date: t("act_2_date"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/news/act2.1.webp`
  },
  {
    id: 3,
    title: t("act_3_title"),
    description: t("act_3_des"),
    date: t("act_3_date"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`
  }
];

export const facilitiesImages = [
  {
    id: 1,
    title: "Modern Facility 1",
    image: `${import.meta.env.BASE_URL}src/v2/assets/v1/random-pic1.webp`
  },
  {
    id: 2,
    title: "Modern Facility 2",
    image: `${import.meta.env.BASE_URL}src/v2/assets/v1/random-pic2.webp`
  },
  {
    id: 3,
    title: "Modern Facility 3",
    image: `${import.meta.env.BASE_URL}src/v2/assets/v1/random-pic3.webp`
  },
  {
    id: 4,
    title: "Modern Facility 4",
    image: `${import.meta.env.BASE_URL}src/v2/assets/v1/random-pic4.webp`
  },
  {
    id: 5,
    title: "Modern Facility 5",
    image: `${import.meta.env.BASE_URL}src/v2/assets/v1/random-pic5.webp`
  },
  {
    id: 6,
    title: "Modern Facility 6",
    image: `${import.meta.env.BASE_URL}src/v2/assets/v1/random-pic6.webp`
  }
];

export const getStaffMembers = (t) => [
  {
    id: 1,
    name: t("staff_1_name"),
    title: t("staff_1_title"),
    description: t("staff_1_des"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/NguyenvanA.webp`,
    department: t("staff_1_dep"),
  },
  {
    id: 2,
    name: t("staff_2_name"),
    title: t("staff_2_title"),
    description: t("staff_2_des"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/kim-ha-neul-1.webp`,
    department: t("staff_2_dep"),
  },
  {
    id: 3,
    name: t("staff_3_name"),
    title: t("staff_3_title"),
    description: t("staff_3_des"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/TranthiB.webp`,
    department: t("staff_3_dep"),
  },
  {
    id: 4,
    name: t("staff_4_name"),
    title: t("staff_4_title"),
    description: t("staff_4_des"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/Lee.webp`,
    department: t("staff_4_dep"),
  },
  {
    id: 5,
    name: t("staff_5_name"),
    title: t("staff_5_title"),
    description: t("staff_5_des"),
    image: `${import.meta.env.BASE_URL}src/v2/assets/PhamvanC.webp`,
    department: t("staff_5_dep"),
  },
];