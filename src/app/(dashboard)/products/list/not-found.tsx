import * as React from "react";
import { useTranslation } from "react-i18next";

function noProduct() {
  const darkerZinc = `var(--zinc-900to-100)`;
  const lighterZinc = `var(--zinc-600-to-300)`;

  return (
    <svg viewBox="0 0 119 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M80.16 39.17C71.7899 39.17 63.27 38.83 55.2999 36.61C47.4799 34.44 40.2999 30.23 33.8999 25.36C29.7099 22.19 25.8999 19.66 20.4599 20.04C15.138 20.328 10.0487 22.3153 5.93995 25.71C-0.980052 31.77 0.0599475 43 2.82995 50.86C6.98995 62.73 19.6499 71 30.4099 76.35C42.84 82.56 56.5 86.17 70.1899 88.24C82.1899 90.07 97.6099 91.39 108.01 83.56C117.56 76.35 120.18 59.91 117.84 48.81C117.272 45.5309 115.526 42.5721 112.93 40.49C106.22 35.58 96.2099 38.86 88.6699 39.02C85.8699 39.08 83.02 39.15 80.16 39.17Z"
        fill={darkerZinc}
      />
      <path
        d="M60.0801 107.7C80.3545 107.7 96.7901 106.675 96.7901 105.41C96.7901 104.145 80.3545 103.12 60.0801 103.12C39.8057 103.12 23.3701 104.145 23.3701 105.41C23.3701 106.675 39.8057 107.7 60.0801 107.7Z"
        fill={darkerZinc}
      />
      <path
        d="M8.28003 17.12L21.28 16.02C22.9011 15.878 24.5218 16.2973 25.8707 17.2075C27.2196 18.1177 28.2149 19.4636 28.69 21.02L41.15 62.72L38.71 67.09C38.0833 68.216 37.7739 69.4909 37.8149 70.7789C37.8558 72.0669 38.2455 73.3196 38.9424 74.4035C39.6394 75.4874 40.6174 76.3619 41.7723 76.9336C42.9271 77.5053 44.2155 77.7529 45.5 77.65L95.4 73.41"
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.55 27.35L88.5501 22.43C89.1214 22.381 89.6965 22.4613 90.2325 22.665C90.7686 22.8686 91.252 23.1903 91.6468 23.6062C92.0416 24.0221 92.3376 24.5216 92.5131 25.0675C92.6885 25.6135 92.7387 26.192 92.6601 26.76L88.7301 55.13C88.6107 55.9812 88.2085 56.7675 87.5882 57.3624C86.9679 57.9573 86.1655 58.3263 85.31 58.41L41.1501 62.72L30.55 27.35Z"
        fill={lighterZinc}
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.0501 87.21C53.6514 87.21 55.7601 85.1013 55.7601 82.5C55.7601 79.8987 53.6514 77.79 51.0501 77.79C48.4488 77.79 46.3401 79.8987 46.3401 82.5C46.3401 85.1013 48.4488 87.21 51.0501 87.21Z"
        fill={lighterZinc}
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M83.8499 84.43C86.4512 84.43 88.5599 82.3213 88.5599 79.72C88.5599 77.1187 86.4512 75.01 83.8499 75.01C81.2486 75.01 79.1399 77.1187 79.1399 79.72C79.1399 82.3213 81.2486 84.43 83.8499 84.43Z"
        fill={lighterZinc}
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5746 14.894L6.3186 15.9339C5.2565 16.0241 4.46856 16.9581 4.55868 18.0202C4.6488 19.0823 5.58286 19.8702 6.64495 19.7801L18.9009 18.7402C19.963 18.6501 20.7509 17.716 20.6608 16.6539C20.5707 15.5918 19.6366 14.8039 18.5746 14.894Z"
        fill={lighterZinc}
      />
      <path
        d="M54.97 49.26C55.2091 47.4349 56.065 45.7465 57.3957 44.4747C58.7263 43.2029 60.4517 42.4242 62.2857 42.2678C64.1197 42.1113 65.9521 42.5866 67.4789 43.6146C69.0057 44.6427 70.1352 46.1618 70.68 47.92"
        stroke={darkerZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.8099 38.47C71.4285 38.47 71.9299 37.9686 71.9299 37.35C71.9299 36.7315 71.4285 36.23 70.8099 36.23C70.1914 36.23 69.6899 36.7315 69.6899 37.35C69.6899 37.9686 70.1914 38.47 70.8099 38.47Z"
        fill={darkerZinc}
      />
      <path
        d="M53.0599 39.97C53.6785 39.97 54.1799 39.4686 54.1799 38.85C54.1799 38.2315 53.6785 37.73 53.0599 37.73C52.4414 37.73 51.9399 38.2315 51.9399 38.85C51.9399 39.4686 52.4414 39.97 53.0599 39.97Z"
        fill={darkerZinc}
      />
      <path
        d="M21.51 81.11V85.42"
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3601 83.26H23.6601"
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M90.22 0.98999V5.28999"
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M88.0701 3.14001H92.3701"
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.3101 13.84V18.14"
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.1499 15.99H41.4599"
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100.95 29.65C101.513 29.65 101.97 29.1933 101.97 28.63C101.97 28.0667 101.513 27.61 100.95 27.61C100.387 27.61 99.9299 28.0667 99.9299 28.63C99.9299 29.1933 100.387 29.65 100.95 29.65Z"
        fill={lighterZinc}
        stroke={lighterZinc}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62.8301 20.48C63.3713 20.48 63.8101 20.0412 63.8101 19.5C63.8101 18.9587 63.3713 18.52 62.8301 18.52C62.2889 18.52 61.8501 18.9587 61.8501 19.5C61.8501 20.0412 62.2889 20.48 62.8301 20.48Z"
        fill={lighterZinc}
      />
      <path
        d="M69.4099 91.6C69.9512 91.6 70.3899 91.1613 70.3899 90.62C70.3899 90.0788 69.9512 89.64 69.4099 89.64C68.8687 89.64 68.4299 90.0788 68.4299 90.62C68.4299 91.1613 68.8687 91.6 69.4099 91.6Z"
        fill={lighterZinc}
      />
    </svg>
  );
}

const NoProductComponent = React.memo(noProduct);

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="col-span-full h-[240px] w-full flex flex-col gap-y-4 items-center justify-center mt-10">
      <NoProductComponent />
      <p className="text-muted-foreground text-center">{t("empty_product")}</p>
    </div>
  );
}

export default NotFound;
