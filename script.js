// ข้อมูลเกณฑ์มาตรฐาน
const fitnessStandards = {
    gripStrength: {
        male: {
            '19-24': { low: 0.50, medium: [0.51, 0.60], good: [0.61, 0.69], excellent: [0.70, 0.79], veryExcellent: 0.80 },
            '25-29': { low: 0.51, medium: [0.52, 0.61], good: [0.62, 0.70], excellent: [0.71, 0.80], veryExcellent: 0.81 },
            '30-34': { low: 0.52, medium: [0.53, 0.61], good: [0.62, 0.70], excellent: [0.71, 0.79], veryExcellent: 0.80 },
            '35-39': { low: 0.50, medium: [0.51, 0.59], good: [0.60, 0.68], excellent: [0.69, 0.77], veryExcellent: 0.78 },
            '40-44': { low: 0.41, medium: [0.42, 0.51], good: [0.52, 0.62], excellent: [0.63, 0.72], veryExcellent: 0.73 },
            '45-49': { low: 0.36, medium: [0.37, 0.49], good: [0.50, 0.60], excellent: [0.61, 0.71], veryExcellent: 0.72 },
            '50-54': { low: 0.35, medium: [0.36, 0.47], good: [0.48, 0.58], excellent: [0.59, 0.68], veryExcellent: 0.69 },
            '55-59': { low: 0.34, medium: [0.35, 0.46], good: [0.47, 0.57], excellent: [0.58, 0.68], veryExcellent: 0.69 }
        },
        female: {
            '19-24': { low: 0.40, medium: [0.41, 0.48], good: [0.49, 0.55], excellent: [0.56, 0.63], veryExcellent: 0.64 },
            '25-29': { low: 0.40, medium: [0.41, 0.49], good: [0.50, 0.58], excellent: [0.59, 0.67], veryExcellent: 0.68 },
            '30-34': { low: 0.42, medium: [0.43, 0.52], good: [0.53, 0.62], excellent: [0.63, 0.68], veryExcellent: 0.69 },
            '35-39': { low: 0.37, medium: [0.38, 0.45], good: [0.46, 0.54], excellent: [0.55, 0.62], veryExcellent: 0.63 },
            '40-44': { low: 0.36, medium: [0.37, 0.44], good: [0.45, 0.53], excellent: [0.54, 0.61], veryExcellent: 0.62 },
            '45-49': { low: 0.35, medium: [0.36, 0.43], good: [0.44, 0.52], excellent: [0.53, 0.60], veryExcellent: 0.61 },
            '50-54': { low: 0.32, medium: [0.33, 0.39], good: [0.40, 0.46], excellent: [0.47, 0.53], veryExcellent: 0.54 },
            '55-59': { low: 0.30, medium: [0.31, 0.38], good: [0.39, 0.45], excellent: [0.46, 0.51], veryExcellent: 0.52 }
        }
    },
    sitAndReach: {
        male: {
            '19-24': { veryLow: 1, low: [2, 8], medium: [9, 16], good: [17, 23], excellent: 24 },
            '25-29': { veryLow: 1, low: [2, 8], medium: [9, 15], good: [16, 22], excellent: 23 },
            '30-34': { veryLow: 0, low: [1, 7], medium: [8, 14], good: [15, 21], excellent: 22 },
            '35-39': { veryLow: -1, low: [0, 6], medium: [7, 14], good: [15, 21], excellent: 22 },
            '40-44': { veryLow: -2, low: [-1, 5], medium: [6, 12], good: [13, 19], excellent: 20 },
            '45-49': { veryLow: -4, low: [-3, 3], medium: [4, 11], good: [12, 18], excellent: 19 },
            '50-54': { veryLow: -5, low: [-4, 2], medium: [3, 10], good: [11, 17], excellent: 18 },
            '55-59': { veryLow: -6, low: [-5, 1], medium: [2, 9], good: [10, 16], excellent: 17 }
        },
        female: {
            '19-24': { veryLow: 4, low: [5, 12], medium: [13, 19], good: [20, 26], excellent: 27 },
            '25-29': { veryLow: 3, low: [4, 11], medium: [12, 18], good: [19, 25], excellent: 26 },
            '30-34': { veryLow: 2, low: [3, 9], medium: [10, 16], good: [17, 22], excellent: 23 },
            '35-39': { veryLow: 0, low: [1, 7], medium: [8, 14], good: [15, 21], excellent: 22 },
            '40-44': { veryLow: -2, low: [-1, 5], medium: [6, 13], good: [14, 20], excellent: 21 },
            '45-49': { veryLow: -2, low: [-1, 5], medium: [6, 12], good: [13, 19], excellent: 20 },
            '50-54': { veryLow: -3, low: [-2, 3], medium: [4, 10], good: [11, 17], excellent: 18 },
            '55-59': { veryLow: -4, low: [-3, 3], medium: [4, 10], good: [11, 17], excellent: 18 }
        }
    },
    sitUp: {
        male: {
            '16-19': { veryLow: 10, low: [11, 13], medium: [14, 18], good: [19, 21], excellent: 22 },
            '20-29': { veryLow: 6, low: [7, 10], medium: [11, 16], good: [17, 19], excellent: 20 },
            '30-39': { veryLow: 4, low: [5, 7], medium: [8, 13], good: [14, 16], excellent: 17 },
            '40-49': { veryLow: 3, low: [4, 5], medium: [6, 11], good: [12, 15], excellent: 16 },
            '50-59': { veryLow: 1, low: [2, 4], medium: [5, 9], good: [10, 12], excellent: 13 },
           
        },
        female: {
            '16-19': { veryLow: 10, low: [11, 13], medium: [14, 18], good: [19, 21], excellent: 22 },
            '20-29': { veryLow: 6, low: [7, 10], medium: [11, 16], good: [17, 19], excellent: 20 },
            '30-39': { veryLow: 4, low: [5, 7], medium: [8, 13], good: [14, 16], excellent: 17 },
            '40-49': { veryLow: 3, low: [4, 5], medium: [6, 11], good: [12, 15], excellent: 16 },
            '50-59': { veryLow: 1, low: [2, 4], medium: [5, 9], good: [10, 12], excellent: 13 },
        }
    },
    chairStand: {
        male: {
            '19-24': { veryLow: 8, low: [9, 15], medium: [16, 21], good: [22, 28], excellent: 29 },
            '25-29': { veryLow: 7, low: [8, 13], medium: [14, 19], good: [20, 25], excellent: 26 },
            '30-34': { veryLow: 7, low: [8, 13], medium: [14, 19], good: [20, 25], excellent: 26 },
            '35-39': { veryLow: 7, low: [8, 13], medium: [14, 19], good: [20, 25], excellent: 26 },
            '40-44': { veryLow: 7, low: [8, 13], medium: [14, 19], good: [20, 25], excellent: 26 },
            '45-49': { veryLow: 7, low: [8, 13], medium: [14, 19], good: [20, 25], excellent: 26 },
            '50-54': { veryLow: 7, low: [8, 13], medium: [14, 19], good: [20, 25], excellent: 26 },
            '55-59': { veryLow: 7, low: [8, 13], medium: [14, 19], good: [20, 25], excellent: 26 }
        },
        female: {
            '19-24': { veryLow: 9, low: [10, 15], medium: [16, 22], good: [23, 29], excellent: 30 },
            '25-29': { veryLow: 8, low: [9, 14], medium: [15, 20], good: [21, 26], excellent: 27 },
            '30-34': { veryLow: 8, low: [9, 14], medium: [15, 20], good: [21, 26], excellent: 27 },
            '35-39': { veryLow: 8, low: [9, 14], medium: [15, 20], good: [21, 26], excellent: 27 },
            '40-44': { veryLow: 8, low: [9, 14], medium: [15, 20], good: [21, 26], excellent: 27 },
            '45-49': { veryLow: 8, low: [9, 14], medium: [15, 20], good: [21, 26], excellent: 27 },
            '50-54': { veryLow: 8, low: [9, 14], medium: [15, 20], good: [21, 26], excellent: 27 },
            '55-59': { veryLow: 8, low: [9, 14], medium: [15, 20], good: [21, 26], excellent: 27 }
        }
    },
    stepTest: {
        male: {
            '19-24': { veryLow: 86, low: [87, 107], medium: [108, 129], good: [130, 140], excellent: 141 },
            '25-29': { veryLow: 90, low: [91, 114], medium: [115, 139], good: [140, 157], excellent: 158 },
            '30-34': { veryLow: 88, low: [89, 111], medium: [112, 134], good: [135, 151], excellent: 152 },
            '35-39': { veryLow: 88, low: [89, 108], medium: [109, 128], good: [129, 146], excellent: 147 },
            '40-44': { veryLow: 86, low: [87, 107], medium: [108, 129], good: [130, 140], excellent: 141 },
            '45-49': { veryLow: 84, low: [85, 106], medium: [107, 127], good: [128, 141], excellent: 142 },
            '50-54': { veryLow: 82, low: [83, 103], medium: [104, 123], good: [124, 136], excellent: 137 },
            '55-59': { veryLow: 80, low: [81, 101], medium: [102, 122], good: [123, 135], excellent: 136 }
        },
        female: {
            '19-24': { veryLow: 82, low: [83, 103], medium: [104, 123], good: [124, 136], excellent: 137 },
            '25-29': { veryLow: 84, low: [85, 106], medium: [107, 127], good: [128, 141], excellent: 142 },
            '30-34': { veryLow: 87, low: [88, 107], medium: [108, 128], good: [129, 141], excellent: 142 },
            '35-39': { veryLow: 89, low: [90, 110], medium: [111, 131], good: [132, 145], excellent: 146 },
            '40-44': { veryLow: 91, low: [92, 113], medium: [114, 135], good: [136, 150], excellent: 151 },
            '45-49': { veryLow: 95, low: [96, 116], medium: [117, 138], good: [139, 150], excellent: 151 },
            '50-54': { veryLow: 96, low: [97, 117], medium: [118, 139], good: [140, 151], excellent: 152 },
            '55-59': { veryLow: 100, low: [101, 123], medium: [124, 146], good: [147, 159], excellent: 160 }
        }
    }
};

const bloodPressureStandards = {
    normal: { systolic: [120, 129], diastolic: [80, 84] },
    preHigh: { systolic: [130, 139], diastolic: [85, 89] },
    high1: { systolic: [140, 159], diastolic: [90, 99] },
    high2: { systolic: [160, 179], diastolic: [100, 109] },
    high3: { systolic: 180, diastolic: 110 }
};

const waistStandards = {
    male: { high: 90, veryHigh: 100 },
    female: { high: 80, veryHigh: 90 }
};

const bmiStandards = {
    underweight: 18.5,
    normal: 24.9,
    overweight: 29.9,
    obese1: 34.9,
    obese2: 39.9,
    obese3: 40
};

// ฟังก์ชันหลัก
document.addEventListener('DOMContentLoaded', function() {
    const evaluateBtn = document.getElementById('evaluate-btn');
    evaluateBtn.addEventListener('click', evaluateHealth);
});

function evaluateHealth() {
    // รับค่าจากฟอร์ม
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const waist = parseFloat(document.getElementById('waist').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // แปลงเป็นเมตร
    const systolic = parseInt(document.getElementById('systolic').value);
    const diastolic = parseInt(document.getElementById('diastolic').value);
    
    // ผลทดสอบสมรรถภาพ
    const gripStrength = parseFloat(document.getElementById('grip-strength').value);
    const sitAndReach = parseInt(document.getElementById('sit-and-reach').value);
    const sitUp = parseInt(document.getElementById('sit-up').value);
    const chairStand = parseInt(document.getElementById('chair-stand').value);
    const stepTest = parseInt(document.getElementById('step-test').value);
    
    // คำนวณ BMI
    const bmi = weight / (height * height);
    
    // แปลงอายุเป็นกลุ่มอายุ
    const ageGroup = getAgeGroup(age);
    
    // ประเมินผล
    evaluateBMI(bmi);
    evaluateWaist(waist, gender);
    evaluateBloodPressure(systolic, diastolic);
    
    // ประเมินสมรรถภาพร่างกาย
    evaluateGripStrength(gripStrength / weight, ageGroup, gender);
    evaluateSitAndReach(sitAndReach, ageGroup, gender);
    evaluateSitUp(sitUp, ageGroup, gender);
    evaluateChairStand(chairStand, ageGroup, gender);
    evaluateStepTest(stepTest, ageGroup, gender);
    
    // แสดงผลลัพธ์
    document.getElementById('results').classList.remove('hidden');
}

function getAgeGroup(age) {
    if (age >= 19 && age <= 24) return '19-24';
    if (age >= 25 && age <= 29) return '25-29';
    if (age >= 30 && age <= 34) return '30-34';
    if (age >= 35 && age <= 39) return '35-39';
    if (age >= 40 && age <= 44) return '40-44';
    if (age >= 45 && age <= 49) return '45-49';
    if (age >= 50 && age <= 54) return '50-54';
    if (age >= 55 && age <= 59) return '55-59';
    return '19-24'; // ค่าเริ่มต้นหากอายุไม่ตรงกับกลุ่มใด
}

function evaluateBMI(bmi) {
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (bmi < bmiStandards.underweight) {
        resultText = `น้ำหนักต่ำกว่าเกณฑ์ (BMI: ${bmi.toFixed(1)}) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรรับประทานอาหารที่มีแคลอรีสูง เพิ่มโปรตีนและคาร์โบไฮเดรต ออกกำลังกายแบบเวทเทรนนิ่งเพื่อเพิ่มมวลกล้ามเนื้อ';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (bmi <= bmiStandards.normal) {
        resultText = `น้ำหนักปกติ (BMI: ${bmi.toFixed(1)}) 👍`;
        resultText += '<br><strong>คำแนะนำ:</strong> ดูแลรักษาน้ำหนักให้อยู่ในเกณฑ์นี้ด้วยการรับประทานอาหารที่สมดุลและออกกำลังกายสม่ำเสมอ';
        resultClass = 'normal';
        emoji = '✅';
    } else if (bmi <= bmiStandards.overweight) {
        resultText = `น้ำหนักเกิน (BMI: ${bmi.toFixed(1)}) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรควบคุมอาหาร ลดแคลอรี เน้นผักผลไม้ และออกกำลังกายแบบคาร์ดิโออย่างน้อย 150 นาทีต่อสัปดาห์';
        resultClass = 'warning';
        emoji = '⚠️';
    } else if (bmi <= bmiStandards.obese1) {
        resultText = `อ้วนระดับ 1 (BMI: ${bmi.toFixed(1)}) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรปรึกษาแพทย์หรือนักโภชนาการเพื่อวางแผนลดน้ำหนักอย่างถูกวิธี ออกกำลังกายอย่างสม่ำเสมอ';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (bmi <= bmiStandards.obese2) {
        resultText = `อ้วนระดับ 2 (BMI: ${bmi.toFixed(1)}) 🚨🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรปรึกษาแพทย์ทันทีเพื่อประเมินความเสี่ยงต่อสุขภาพและวางแผนการรักษาที่เหมาะสม';
        resultClass = 'danger';
        emoji = '⚠️';
    } else {
        resultText = `อ้วนระดับ 3 (BMI: ${bmi.toFixed(1)}) 🚨🚨🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> จำเป็นต้องได้รับการดูแลจากแพทย์อย่างใกล้ชิด เนื่องจากมีความเสี่ยงสูงต่อโรคต่างๆ';
        resultClass = 'danger';
        emoji = '⚠️';
    }
    
    displayResult('bmi-result', `${emoji} ${resultText}`, resultClass);
}

function evaluateWaist(waist, gender) {
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (gender === 'male') {
        if (waist < waistStandards.male.high) {
            resultText = `รอบเอวปกติ (${waist} ซม.) 👍`;
            resultText += '<br><strong>คำแนะนำ:</strong> รักษาสุขภาพด้วยการรับประทานอาหารที่มีประโยชน์และออกกำลังกายสม่ำเสมอ';
            resultClass = 'normal';
            emoji = '✅';
        } else if (waist < waistStandards.male.veryHigh) {
            resultText = `รอบเอวสูง (${waist} ซม.) ⚠️`;
            resultText += '<br><strong>คำแนะนำ:</strong> ควรลดน้ำหนัก ลดอาหารหวาน มัน เค็ม ออกกำลังกายแบบแอโรบิกอย่างน้อย 30 นาทีต่อวัน';
            resultClass = 'warning';
            emoji = '⚠️';
        } else {
            resultText = `รอบเอวสูงมาก (${waist} ซม.) 🚨`;
            resultText += '<br><strong>คำแนะนำ:</strong> มีความเสี่ยงสูงต่อโรคเมตาบอลิก ควรปรึกษาแพทย์หรือนักโภชนาการเพื่อวางแผนลดน้ำหนักอย่างถูกวิธี';
            resultClass = 'danger';
            emoji = '⚠️';
        }
    } else {
        if (waist < waistStandards.female.high) {
            resultText = `รอบเอวปกติ (${waist} ซม.) 👍`;
            resultText += '<br><strong>คำแนะนำ:</strong> รักษาสุขภาพด้วยการรับประทานอาหารที่มีประโยชน์และออกกำลังกายสม่ำเสมอ';
            resultClass = 'normal';
            emoji = '✅';
        } else if (waist < waistStandards.female.veryHigh) {
            resultText = `รอบเอวสูง (${waist} ซม.) ⚠️`;
            resultText += '<br><strong>คำแนะนำ:</strong> ควรลดน้ำหนัก ลดอาหารหวาน มัน เค็ม ออกกำลังกายแบบแอโรบิกอย่างน้อย 30 นาทีต่อวัน';
            resultClass = 'warning';
            emoji = '⚠️';
        } else {
            resultText = `รอบเอวสูงมาก (${waist} ซม.) 🚨`;
            resultText += '<br><strong>คำแนะนำ:</strong> มีความเสี่ยงสูงต่อโรคเมตาบอลิก ควรปรึกษาแพทย์หรือนักโภชนาการเพื่อวางแผนลดน้ำหนักอย่างถูกวิธี';
            resultClass = 'danger';
            emoji = '⚠️';
        }
    }
    
    displayResult('waist-result', `${emoji} ${resultText}`, resultClass);
}

function evaluateBloodPressure(systolic, diastolic) {
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (systolic < 120 && diastolic < 80) {
        resultText = `ความดันโลหิตต่ำกว่าเกณฑ์ (${systolic}/${diastolic} mmHg) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> หากมีอาการเวียนศีรษะหรืออ่อนเพลียบ่อย ควรปรึกษาแพทย์';
        resultClass = 'info';
        emoji = 'ℹ️';
    } else if (systolic <= 129 && diastolic <= 84) {
        resultText = `ความดันโลหิตปกติ (${systolic}/${diastolic} mmHg) 👍`;
        resultText += '<br><strong>คำแนะนำ:</strong> ดูแลรักษาสุขภาพด้วยการรับประทานอาหารที่มีประโยชน์และออกกำลังกายสม่ำเสมอ';
        resultClass = 'normal';
        emoji = '✅';
    } else if (systolic <= 139 || diastolic <= 89) {
        resultText = `ความดันโลหิตสูงเล็กน้อย (${systolic}/${diastolic} mmHg) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรปรับเปลี่ยนพฤติกรรม ลดอาหารเค็ม ออกกำลังกายสม่ำเสมอ ตรวจความดันเป็นประจำ';
        resultClass = 'warning';
        emoji = '⚠️';
    } else if (systolic <= 159 || diastolic <= 99) {
        resultText = `ความดันโลหิตสูงระยะที่ 1 (${systolic}/${diastolic} mmHg) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรปรึกษาแพทย์เพื่อประเมินความเสี่ยงและอาจจำเป็นต้องใช้ยา ร่วมกับการปรับเปลี่ยนพฤติกรรม';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (systolic <= 179 || diastolic <= 109) {
        resultText = `ความดันโลหิตสูงระยะที่ 2 (${systolic}/${diastolic} mmHg) 🚨🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> จำเป็นต้องได้รับการรักษาจากแพทย์อย่างเร่งด่วน มีความเสี่ยงสูงต่อโรคหัวใจและหลอดเลือด';
        resultClass = 'danger';
        emoji = '⚠️';
    } else {
        resultText = `ความดันโลหิตสูงระยะรุนแรง (${systolic}/${diastolic} mmHg) 🚨🚨🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ต้องได้รับการรักษาจากแพทย์ทันที มีความเสี่ยงสูงมากต่อภาวะแทรกซ้อนที่อันตราย';
        resultClass = 'danger';
        emoji = '⚠️';
    }
    
    displayResult('blood-pressure-result', `${emoji} ${resultText}`, resultClass);
}

function evaluateGripStrength(value, ageGroup, gender) {
    const standards = fitnessStandards.gripStrength[gender][ageGroup];
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (value < standards.low) {
        resultText = `แรงบีบมือต่ำมาก (${value.toFixed(2)} กก./น้ำหนักตัว) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรฝึกความแข็งแรงของมือและแขนด้วยอุปกรณ์เช่น hand grip หรือการยกน้ำหนักเบาๆ';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (value >= standards.low && value <= standards.medium[1]) {
        resultText = `แรงบีบมือต่ำ (${value.toFixed(2)} กก./น้ำหนักตัว) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรฝึกความแข็งแรงของมือและแขนด้วยอุปกรณ์เช่น hand grip หรือการยกน้ำหนักเบาๆ';
        resultClass = 'warning';
        emoji = '⚠️';
    } else if (value <= standards.good[1]) {
        resultText = `แรงบีบมือปานกลาง (${value.toFixed(2)} กก./น้ำหนักตัว) ℹ️`;
        resultText += '<br><strong>คำแนะนำ:</strong> พัฒนาความแข็งแรงด้วยการฝึกความทนทานของกล้ามเนื้อมือและแขน';
        resultClass = 'info';
        emoji = 'ℹ️';
    } else if (value <= standards.excellent[1]) {
        resultText = `แรงบีบมือดี (${value.toFixed(2)} กก./น้ำหนักตัว) 👍`;
        resultText += '<br><strong>คำแนะนำ:</strong> รักษาระดับความแข็งแรงนี้ด้วยการออกกำลังกายสม่ำเสมอ';
        resultClass = 'normal';
        emoji = '✅';
    } else {
        resultText = `แรงบีบมือดีมาก (${value.toFixed(2)} กก./น้ำหนักตัว) 🎉`;
        resultText += '<br><strong>คำแนะนำ:</strong> ความแข็งแรงของมือและแขนอยู่ในระดับดีเยี่ยม';
        resultClass = 'normal';
        emoji = '✅';
    }
    
    displayResult('grip-strength-result', `${emoji} ${resultText}`, resultClass);
}

function evaluateSitAndReach(value, ageGroup, gender) {
    const standards = fitnessStandards.sitAndReach[gender][ageGroup];
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (value < standards.veryLow) {
        resultText = `ความอ่อนตัวต่ำมาก (${value} ซม.) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรฝึกยืดเหยียดกล้ามเนื้อหลังและขาทุกวัน เน้นการยืดแบบค้างไว้ 15-30 วินาที';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (value >= standards.veryLow && value <= standards.low[1]) {
        resultText = `ความอ่อนตัวต่ำ (${value} ซม.) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> ฝึกยืดเหยียดกล้ามเนื้อหลังและขาอย่างน้อย 3 ครั้งต่อสัปดาห์';
        resultClass = 'warning';
        emoji = '⚠️';
    } else if (value <= standards.medium[1]) {
        resultText = `ความอ่อนตัวปานกลาง (${value} ซม.) ℹ️`;
        resultText += '<br><strong>คำแนะนำ:</strong> พัฒนาความอ่อนตัวด้วยการยืดเหยียดเป็นประจำ';
        resultClass = 'info';
        emoji = 'ℹ️';
    } else if (value <= standards.good[1]) {
        resultText = `ความอ่อนตัวดี (${value} ซม.) 👍`;
        resultText += '<br><strong>คำแนะนำ:</strong> รักษาระดับความอ่อนตัวนี้ด้วยการยืดเหยียดสม่ำเสมอ';
        resultClass = 'normal';
        emoji = '✅';
    } else {
        resultText = `ความอ่อนตัวดีมาก (${value} ซม.) 🎉`;
        resultText += '<br><strong>คำแนะนำ:</strong> ความอ่อนตัวอยู่ในระดับดีเยี่ยม';
        resultClass = 'normal';
        emoji = '✅';
    }
    
    displayResult('sit-and-reach-result', `${emoji} ${resultText}`, resultClass);
}

function evaluateSitUp(value, ageGroup, gender) {
    const standards = fitnessStandards.sitUp[gender][ageGroup];
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (value < standards.veryLow) {
        resultText = `ความแข็งแรงกล้ามเนื้อท้องต่ำมาก (${value} ครั้ง) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรฝึกซิตอัพแบบง่ายๆ วันละ 10-15 ครั้ง ค่อยๆ เพิ่มจำนวนขึ้น';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (value >= standards.veryLow && value <= standards.low[1]) {
        resultText = `ความแข็งแรงกล้ามเนื้อท้องต่ำ (${value} ครั้ง) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> ฝึกซิตอัพอย่างน้อย 3 ครั้งต่อสัปดาห์ ค่อยๆ เพิ่มจำนวนครั้ง';
        resultClass = 'warning';
        emoji = '⚠️';
    } else if (value <= standards.medium[1]) {
        resultText = `ความแข็งแรงกล้ามเนื้อท้องปานกลาง (${value} ครั้ง) ℹ️`;
        resultText += '<br><strong>คำแนะนำ:</strong> พัฒนาความแข็งแรงด้วยการฝึกซิตอัพและแบบฝึกหัดอื่นๆ สำหรับกล้ามเนื้อท้อง';
        resultClass = 'info';
        emoji = 'ℹ️';
    } else if (value <= standards.good[1]) {
        resultText = `ความแข็งแรงกล้ามเนื้อท้องดี (${value} ครั้ง) 👍`;
        resultText += '<br><strong>คำแนะนำ:</strong> รักษาระดับความแข็งแรงนี้ด้วยการฝึกกล้ามเนื้อท้องสม่ำเสมอ';
        resultClass = 'normal';
        emoji = '✅';
    } else {
        resultText = `ความแข็งแรงกล้ามเนื้อท้องดีมาก (${value} ครั้ง) 🎉`;
        resultText += '<br><strong>คำแนะนำ:</strong> ความแข็งแรงกล้ามเนื้อท้องอยู่ในระดับดีเยี่ยม';
        resultClass = 'normal';
        emoji = '✅';
    }
    
    displayResult('sit-up-result', `${emoji} ${resultText}`, resultClass);
}

function evaluateChairStand(value, ageGroup, gender) {
    const standards = fitnessStandards.chairStand[gender][ageGroup];
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (value < standards.veryLow) {
        resultText = `ความแข็งแรงขาต่ำมาก (${value} ครั้ง) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรฝึกลุกนั่งจากเก้าอี้แบบง่ายๆ วันละ 5-10 ครั้ง ค่อยๆ เพิ่มจำนวนขึ้น';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (value >= standards.veryLow && value <= standards.low[1]) {
        resultText = `ความแข็งแรงขาต่ำ (${value} ครั้ง) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> ฝึกลุกนั่งจากเก้าอี้อย่างน้อย 3 ครั้งต่อสัปดาห์ ค่อยๆ เพิ่มจำนวนครั้ง';
        resultClass = 'warning';
        emoji = '⚠️';
    } else if (value <= standards.medium[1]) {
        resultText = `ความแข็งแรงขาปานกลาง (${value} ครั้ง) ℹ️`;
        resultText += '<br><strong>คำแนะนำ:</strong> พัฒนาความแข็งแรงด้วยการฝึกลุกนั่งจากเก้าอี้และแบบฝึกหัดอื่นๆ สำหรับขา';
        resultClass = 'info';
        emoji = 'ℹ️';
    } else if (value <= standards.good[1]) {
        resultText = `ความแข็งแรงขาดี (${value} ครั้ง) 👍`;
        resultText += '<br><strong>คำแนะนำ:</strong> รักษาระดับความแข็งแรงนี้ด้วยการฝึกกล้ามเนื้อขาสม่ำเสมอ';
        resultClass = 'normal';
        emoji = '✅';
    } else {
        resultText = `ความแข็งแรงขาดีมาก (${value} ครั้ง) 🎉`;
        resultText += '<br><strong>คำแนะนำ:</strong> ความแข็งแรงขาอยู่ในระดับดีเยี่ยม';
        resultClass = 'normal';
        emoji = '✅';
    }
    
    displayResult('chair-stand-result', `${emoji} ${resultText}`, resultClass);
}

function evaluateStepTest(value, ageGroup, gender) {
    const standards = fitnessStandards.stepTest[gender][ageGroup];
    let resultText = '';
    let resultClass = '';
    let emoji = '';
    
    if (value < standards.veryLow) {
        resultText = `ความทนทานของหัวใจและปอดต่ำมาก (${value} ครั้ง) 🚨`;
        resultText += '<br><strong>คำแนะนำ:</strong> ควรเริ่มออกกำลังกายแบบแอโรบิกเบาๆ เช่น เดินเร็ว 20 นาที 3 ครั้งต่อสัปดาห์';
        resultClass = 'danger';
        emoji = '⚠️';
    } else if (value >= standards.veryLow && value <= standards.low[1]) {
        resultText = `ความทนทานของหัวใจและปอดต่ำ (${value} ครั้ง) ⚠️`;
        resultText += '<br><strong>คำแนะนำ:</strong> เพิ่มการออกกำลังกายแบบแอโรบิก เช่น วิ่งเหยาะๆ หรือปั่นจักรยาน 30 นาที 3-4 ครั้งต่อสัปดาห์';
        resultClass = 'warning';
        emoji = '⚠️';
    } else if (value <= standards.medium[1]) {
        resultText = `ความทนทานของหัวใจและปอดปานกลาง (${value} ครั้ง) ℹ️`;
        resultText += '<br><strong>คำแนะนำ:</strong> พัฒนาความทนทานด้วยการออกกำลังกายแบบแอโรบิก 30-45 นาที 4-5 ครั้งต่อสัปดาห์';
        resultClass = 'info';
        emoji = 'ℹ️';
    } else if (value <= standards.good[1]) {
        resultText = `ความทนทานของหัวใจและปอดดี (${value} ครั้ง) 👍`;
        resultText += '<br><strong>คำแนะนำ:</strong> รักษาระดับความทนทานนี้ด้วยการออกกำลังกายแบบแอโรบิกสม่ำเสมอ';
        resultClass = 'normal';
        emoji = '✅';
    } else {
        resultText = `ความทนทานของหัวใจและปอดดีมาก (${value} ครั้ง) 🎉`;
        resultText += '<br><strong>คำแนะนำ:</strong> ความทนทานของหัวใจและปอดอยู่ในระดับดีเยี่ยม';
        resultClass = 'normal';
        emoji = '✅';
    }
    
    displayResult('step-test-result', `${emoji} ${resultText}`, resultClass);
}

function displayResult(elementId, content, className) {
    const element = document.getElementById(elementId);
    const contentDiv = element.querySelector('.result-content');
    
    contentDiv.innerHTML = content;
    contentDiv.className = 'result-content ' + className;
}
// เพิ่มการแสดงผลแบบไฮไลท์ในฟังก์ชัน displayResult
function displayResult(elementId, content, className) {
    const element = document.getElementById(elementId);
    const contentDiv = element.querySelector('.result-content');
    
    // เพิ่มเอฟเฟกต์ไฮไลท์
    contentDiv.style.animation = 'none';
    void contentDiv.offsetWidth; // Trigger reflow
    contentDiv.style.animation = 'fadeIn 0.5s ease-out';
    
    contentDiv.innerHTML = content;
    contentDiv.className = 'result-content ' + className;
    
    // เพิ่มการเลื่อนไปยังผลลัพธ์เมื่อแสดง
    if(elementId === 'bmi-result') {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// เพิ่มการตรวจสอบฟอร์มก่อนประเมินผล
document.getElementById('evaluate-btn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if(!input.value) {
            input.style.borderColor = '#f72585';
            isValid = false;
        } else {
            input.style.borderColor = '#e9ecef';
        }
    });
    
    if(isValid) {
        evaluateHealth();
    } else {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    }
});

// เพิ่มการแสดงตัวอย่างข้อมูลสำหรับทดสอบ
document.addEventListener('DOMContentLoaded', function() {
    // ตัวอย่างนี้สามารถลบออกเมื่อนำไปใช้งานจริง
    if(window.location.href.includes('localhost')) {
        // เติมข้อมูลตัวอย่างสำหรับการทดสอบ
        document.getElementById('age').value = '30';
        document.getElementById('waist').value = '85';
        document.getElementById('weight').value = '70';
        document.getElementById('height').value = '175';
        document.getElementById('systolic').value = '130';
        document.getElementById('diastolic').value = '85';
        document.getElementById('grip-strength').value = '40';
        document.getElementById('sit-and-reach').value = '15';
        document.getElementById('sit-up').value = '20';
        document.getElementById('chair-stand').value = '25';
        document.getElementById('step-test').value = '120';
    }
});