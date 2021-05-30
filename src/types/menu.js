import denjang from '../images/koreanFood/jjige/denjang.jpg'
import kimchi from '../images/koreanFood/jjige/kimchi.jpg'
import jjaguri from '../images/koreanFood/jjige/jjaguri.jpg'
import suntofu from '../images/koreanFood/jjige/suntofu.jpg'
import budae from '../images/koreanFood/jjige/budae.jpg'
import dongtae from '../images/koreanFood/jjige/dongtae.jpg'

export const GET_MENU = 'menu/GET_MENU'

export const initialMenuState = {
    "한식" : [
                { 
                    menuId: 10,
                    menuName: "된장찌개",
                    imageSrc: denjang,                  
                },
                {
                    menuId: 11,
                    menuName: "김치찌개",
                    imageSrc: kimchi,
                },
                {
                    menuId: 12,
                    menuName: "돼지짜글이",
                    imageSrc: jjaguri,
                },
                {
                    menuId: 13,
                    menuName: "부대찌개",
                    imageSrc: budae,                   
                },
                {
                    menuId: 14,
                    menuName: "동태찌개",
                    imageSrc: dongtae,                    
                },
                {
                    menuId: 15,
                    menuName: "순두부찌개",
                    imageSrc: suntofu,                    
                },
                {
                    menuId: 16,
                    menuName: "뼈다귀해장국",
                    imageSrc: kimchi,                    
                },
                {
                    menuId: 17,
                    menuName: "소고기무국",
                    imageSrc: kimchi,                   
                },
                {
                    menuId: 18,
                    menuName: "콩나물해장국",
                    imageSrc: kimchi,                
                },
                {
                    menuId: 19,
                    menuName: "다슬기국",
                    imageSrc: kimchi,
                },
                {
                    menuId: 20,
                    menuName: "갈비탕",
                    imageSrc: kimchi,
                },
                { 
                    menuId: 21,
                    menuName: "삼계탕",
                    imageSrc: denjang,
                },
                {
                    menuId: 22,
                    menuName: "해물탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 23,
                    menuName: "초계탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 24,
                    menuName: "매운탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 25,
                    menuName: "추어탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 26,
                    menuName: "알탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 27,
                    menuName: "어탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 28,
                    menuName: "대구탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 29,
                    menuName: "닭도리탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 30,
                    menuName: "설렁탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 31,
                    menuName: "동태탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 32,
                    menuName: "감자탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 33,
                    menuName: "돼지국밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 34,
                    menuName: "소머리국밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 35,
                    menuName: "굴국밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 36,
                    menuName: "백숙",
                    imageSrc: kimchi,
                },
                {
                    menuId: 37,
                    menuName: "재첩국",
                    imageSrc: kimchi,
                },
                { 
                    menuId: 38,
                    menuName: "수제비",
                    imageSrc: denjang,
                },
                {
                    menuId: 39,
                    menuName: "미역국",
                    imageSrc: kimchi,
                },
                {
                    menuId: 40,
                    menuName: "오이냉국",
                    imageSrc: kimchi,
                },
                {
                    menuId: 41,
                    menuName: "복어탕",
                    imageSrc: kimchi,
                    
                },
                {
                    menuId: 42,
                    menuName: "아구찜",
                    imageSrc: kimchi,
                },
                {
                    menuId: 43,
                    menuName: "찜닭",
                    imageSrc: kimchi,
                },
                {
                    menuId: 44,
                    menuName: "낙지찜",
                    imageSrc: kimchi,
                },
                {
                    menuId: 45,
                    menuName: "꽃게찜",
                    imageSrc: kimchi,
                },
                {
                    menuId: 46,
                    menuName: "갈비찜",
                    imageSrc: kimchi,
                },
                {
                    menuId: 47,
                    menuName: "파전",
                    imageSrc: kimchi,
                },
                {
                    menuId: 48,
                    menuName: "해물파전",
                    imageSrc: kimchi,
                },
                { 
                    menuId: 49,
                    menuName: "동태전",
                    imageSrc: denjang,
                },
                {
                    menuId: 50,
                    menuName: "감자전",
                    imageSrc: kimchi,
                },
                {
                    menuId: 51,
                    menuName: "새우전",
                    imageSrc: kimchi,
                },
                {
                    menuId: 53,
                    menuName: "어탕국수",
                    imageSrc: kimchi,
                },
                {
                    menuId: 54,
                    menuName: "칼국수",
                    imageSrc: kimchi,
                },
                {
                    menuId: 55,
                    menuName: "콩국수",
                    imageSrc: kimchi,
                },
                {
                    menuId: 56,
                    menuName: "밀면",
                    imageSrc: kimchi,
                },
                {
                    menuId: 57,
                    menuName: "라면",
                    imageSrc: kimchi,
                },
                {
                    menuId: 58,
                    menuName: "잡채",
                    imageSrc: kimchi,
                },
                {
                    menuId: 59,
                    menuName: "생선구이",
                    imageSrc: kimchi,
                },
                {
                    menuId: 60,
                    menuName: "양푼이 갈비찜",
                    imageSrc: kimchi,
                },
                {
                    menuId: 61,
                    menuName: "돼지갈비",
                    imageSrc: kimchi,
                },
                {
                    menuId: 62,
                    menuName: "삼겹살",
                    imageSrc: kimchi,
                },
                {
                    menuId: 63,
                    menuName: "오리고기",
                    imageSrc: kimchi,
                },
                {
                    menuId: 64,
                    menuName: "밥버거",
                    imageSrc: kimchi,
                },
                {
                    menuId: 65,
                    menuName: "간장게장",
                    imageSrc: kimchi,
                },
                {
                    menuId: 66,
                    menuName: "철판쭈꾸미",
                    imageSrc: kimchi,
                },
                {
                    menuId: 67,
                    menuName: "옻닭",
                    imageSrc: kimchi,
                },
                {
                    menuId: 68,
                    menuName: "제육볶음",
                    imageSrc: kimchi,
                },
                {
                    menuId: 69,
                    menuName: "양념게장",
                    imageSrc: kimchi,
                },
                {
                    menuId: 70,
                    menuName: "양념치킨",
                    imageSrc: kimchi,
                },
                {
                    menuId: 71,
                    menuName: "치킨마요",
                    imageSrc: kimchi,
                },

    ],
    "양식" : [
                {
                    menuId: 10,
                    menuName: "햄버거",
                    imageSrc: kimchi,
                },
                {
                    menuId: 11,
                    menuName: "피자",
                    imageSrc: kimchi,
                },
                {
                    menuId: 12,
                    menuName: "KFC치킨",
                    imageSrc: kimchi,
                },
                {
                    menuId: 13,
                    menuName: "샌드위치",
                    imageSrc: kimchi
                },
                {
                    menuId: 14,
                    menuName: "오믈렛",
                    imageSrc: kimchi,
                },
                {
                    menuId: 15,
                    menuName: "버팔로윙",
                    imageSrc: kimchi,
                },
                {
                    menuId: 16,
                    menuName: "미국식 스테이크",
                    imageSrc: kimchi,
                },
                {
                    menuId: 17,
                    menuName: "케비어",
                    imageSrc: kimchi,
                },
                {
                    menuId: 18,
                    menuName: "그냥 빵",
                    imageSrc: kimchi,
                },
                {
                    menuId: 19,
                    menuName: "시리얼",
                    imageSrc: kimchi,
                },
                {
                    menuId: 20,
                    menuName: "스파게티",
                    imageSrc: kimchi,
                },
    ],
    "채식" : [
                {
                    menuId: 10,
                    menuName: "월남쌈",
                    imageSrc: kimchi,
                },
                {
                    menuId: 11,
                    menuName: "보리밥에 풋고추",
                    imageSrc: kimchi,
                },
                {
                    menuId: 12,
                    menuName: "김치에 밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 13,
                    menuName: "웰빙샐러드",
                    imageSrc: kimchi,
                },
                {
                    menuId: 14,
                    menuName: "콩고기",
                    imageSrc: kimchi,
                },
    ],
    "중식" : [
                {
                    menuId: 10,
                    menuName: "샤브샤브",
                    imageSrc: kimchi,
                },
                {
                    menuId: 11,
                    menuName: "훠궈",
                    imageSrc: kimchi,
                },
                {
                    menuId: 12,
                    menuName: "중화만두",
                    imageSrc: kimchi,
                },
                {
                    menuId: 13,
                    menuName: "꿔바로우",
                    imageSrc: kimchi,
                },
                {
                    menuId: 14,
                    menuName: "양꼬치",
                    imageSrc: kimchi,
                },
                {
                    menuId: 15,
                    menuName: "토마토 계란 볶음",
                    imageSrc: kimchi,
                },
                {
                    menuId: 16,
                    menuName: "마라탕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 17,
                    menuName: "짬뽕",
                    imageSrc: kimchi,
                },
                {
                    menuId: 18,
                    menuName: "탕수육",
                    imageSrc: kimchi,
                },
                {
                    menuId: 19,
                    menuName: "양장피",
                    imageSrc: kimchi,
                },
                {
                    menuId: 20,
                    menuName: "울면",
                    imageSrc: kimchi,
                },
                {
                    menuId: 21,
                    menuName: "깐풍기",
                    imageSrc: kimchi,
                },
                {
                    menuId: 22,
                    menuName: "고추잡채",
                    imageSrc: kimchi,
                },
                {
                    menuId: 23,
                    menuName: "짜장면",
                    imageSrc: kimchi,
                },
                {
                    menuId: 24,
                    menuName: "볶음밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 25,
                    menuName: "중화비빔밥",
                    imageSrc: kimchi,
                },

    ],
    "일식" : [
                {
                    menuId: 10,
                    menuName: "돈카츠",
                    imageSrc: kimchi,
                },
                {
                    menuId: 11,
                    menuName: "덴뿌라",
                    imageSrc: kimchi,
                },
                {
                    menuId: 12,
                    menuName: "가츠동",
                    imageSrc: kimchi,
                },
                {
                    menuId: 13,
                    menuName: "간장계란밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 14,
                    menuName: "우동",
                    imageSrc: kimchi,
                },
                {
                    menuId: 15,
                    menuName: "냉우동",
                    imageSrc: kimchi,
                },
                {
                    menuId: 16,
                    menuName: "메밀소바",
                    imageSrc: kimchi,
                },
                {
                    menuId: 17,
                    menuName: "라멘",
                    imageSrc: kimchi,
                },
                {
                    menuId: 18,
                    menuName: "오코노미야키",
                    imageSrc: kimchi,
                },
                {
                    menuId: 19,
                    menuName: "타코야키",
                    imageSrc: kimchi,
                },
                {
                    menuId: 21,
                    menuName: "스시",
                    imageSrc: kimchi,
                },
                {
                    menuId: 19,
                    menuName: "스키야키",
                    imageSrc: kimchi,
                },
    ],
    "분식" : [
                {
                    menuId: 10,
                    menuName: "떡볶이",
                    imageSrc: kimchi,
                },
                {
                    menuId: 11,
                    menuName: "떡",
                    imageSrc: kimchi,
                },
                {
                    menuId: 12,
                    menuName: "화채",
                    imageSrc: kimchi,
                },
                {
                    menuId: 13,
                    menuName: "식혜",
                    imageSrc: kimchi,
                },
                {
                    menuId: 14,
                    menuName: "수정과",
                    imageSrc: kimchi,
                },
                {
                    menuId: 15,
                    menuName: "토스트",
                    imageSrc: kimchi,
                },
                {
                    menuId: 16,
                    menuName: "치즈옥수수",
                    imageSrc: kimchi,
                },
                {
                    menuId: 17,
                    menuName: "주먹밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 18,
                    menuName: "델리만쥬",
                    imageSrc: kimchi,
                },
                {
                    menuId: 19,
                    menuName: "붕어빵",
                    imageSrc: kimchi,
                },
                {
                    menuId: 21,
                    menuName: "오뎅",
                    imageSrc: kimchi,
                },
                {
                    menuId: 19,
                    menuName: "닭꼬치",
                    imageSrc: kimchi,
                },
    ],
    "기타" : [
                {
                    menuId: 10,
                    menuName: "쌀국수",
                    imageSrc: kimchi,
                },
                {
                    menuId: 11,
                    menuName: "케밥",
                    imageSrc: kimchi,
                },
                {
                    menuId: 12,
                    menuName: "똠양꿍",
                    imageSrc: kimchi,
                },
                {
                    menuId: 13,
                    menuName: "카레",
                    imageSrc: kimchi,
                },
                {
                    menuId: 14,
                    menuName: "편의점 도시락",
                    imageSrc: kimchi,
                },
    ],
}