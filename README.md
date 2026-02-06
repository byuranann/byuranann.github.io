# Corn Yield Estimate App

## Objective
The **Corn Yield Estimate App** is a web-based tool designed to help farmers and agriculturalists estimate the potential yield of corn crops. By inputting specific field data and crop characteristics, users can calculate the expected calculation of wet ear weight per rai and the total production for a given standing area. This aids in harvest planning and resource management.

## How it Works
1.  **Select Hybrid (สายพันธุ์)**: Choose the specific corn hybrid being cultivated. This automatically sets the **Kernels per Kg (BB)** value used in the calculation.
2.  **Select Female Area Ratio (อัตราส่วนตัวเมียกับตัวผู้)**: Choose the planting ratio of female to male plants. This determines the **Female Area (B)** factor.
3.  **Enter Field Data**:
    -   **Row Spacing (ระยะระหว่างแถว)**: The distance between rows in centimeters.
    -   **Ears in 4 Meters (จำนวนต้นที่ให้ฝักในระยะ 4 เมตร)**: The number of productive ears found in a 4-meter row section.
    -   **Kernels per Ear (จำนวนเมล็ดต่อฝัก)**: The average number of kernels on a single ear.
    -   **Uniform Factor (ความสมบูรณ์ของแปลง)**: A percentage (65-90%) representing the crop's uniformity and health.
    -   **Standing Area (พื้นที่ปลูกคงเหลือ)**: The total area remaining for harvest in Rai.
4.  **Calculate**: Click the "Calculate Yield" (คำนวณผลผลิต) button.
5.  **View Results**: The app displays:
    -   **Female Population per Rai**: Estimated number of female plants.
    -   **Yield per Rai**: Estimated yield in Kg/Rai.
    -   **Total Wet Ear**: Total estimated production in Kg for the specified standing area.

## Calculation Logic
The yield estimate is derived using the following formula:

```javascript
Yield Estimate (Kg/Rai) = 
  (
    (
      (1600 / (Row Spacing / 100)) / (4 / Ears in 4M) 
    ) * Female Area * Kernels per Ear * (Uniform Factor / 100)
  ) / Kernels per Kg / 0.6
```

*Note: The final division by 0.6 adjusts the estimate based on specific crop parameters.*
