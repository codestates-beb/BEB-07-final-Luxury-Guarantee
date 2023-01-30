import React from 'react';
//FAQ
const FAQ = () => {

    return (
       
<div className="max-w-screen-xl p-8 mx-auto">
    <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">
        FAQs
    </h2>
    <ul className="flex flex-wrap items-start gap-8">
        <li className="w-1/2">
            <p className="text-lg font-medium leading-6 text-gray-900">
                상품을 A/S 받고 싶습니다. 어떻게 접수해야하나요?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                온라인에서 구매한 자사상품에 대해서만 A/S가 가능하며, 오프라인 및 타 쇼핑몰에서 구매한 상품의 경우 해당 구매처로 문의 부탁드립니다.
                실물 확인 전 A/S가능여부에 대해 정확히 안내 드리지 못하는 점 양해 부탁드립니다.
                <br/>
                <br/>
                A/S 접수방법은 아래와 같습니다. (방문 접수 불가)
                * A/S센터로 택배 발송 부탁드립니다.
                <br/>
                <br/>
                1. AS센터 주소: 서울시 어딘가 (☎ 1588-0000)<br/>
                2. 택배 포장 시 (주문자명, 주문번호, 연락처, 요청사유) 메모지 동봉 부탁드립니다.<br/>
                3. 택배사 상관없이 택배비 선불로 접수 부탁드립니다.<br/>
                4. 접수 상품이 AS센터에 입고되면 담당자가 수선 가능여부 및 진행방법에 대해 유선 안내드립니다.<br/>
                <br/>
                AS담당자에게 상품 실물입고 후 디자인 및 손상 정도, 부자재 유무에 따라 수선이 불가하거나 변동사항이 있을 경우 별도 연락을 드릴 수 있는 점 참고 부탁드립니다.
                <br/>
                그 밖에 'A/S가능여부 / 접수방법 / 진행과정' 등의 문의는 A/S센터 (☎ 1588-0000) 로 문의 부탁드립니다.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            교환/반품/환불 정책이 어떻게 되나요?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                1. 상품 배송완료일로부터 7일 이내 교환 / 반품 신청이 가능 합니다.<br/>
                * 단, 일부 상품, 빈티지, 리미티드 등의 경우 상품 출고 후 교환/반품/취소가 어려울 수 있으니 참고하여 구매 부탁 드립니다.
                <br/><br/>
                2. 상품을 미사용한 상태에서 반송 부탁드립니다.<br/>
                3. 물류센터에 반송된 상품의 입고 여부가 확인된 후에 검품을 거쳐 환불하여 드립니다.<br/>
                4. 전자상거래 등에서의 소비자보호에 관한 법률 제17조 (청약철회 등) 에 의거 상품의 반품이 불가능한 경우 교환 및 반품이 되지 않습니다.<br/>
                <br/>
                * 고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우.<br/>
                (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)<br/>
                * 포장을 개봉하였거나 포장이 훼손되어 상품가치가 현저히 상실된 경우<br/>
                * 모든 상품의 Tag, 상품스티커, 비닐포장, 상품케이스(정품박스) 등을 훼손 및 멸실한 경우<br/>
                * 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우<br/>
                * 구매하신 상품의 구성(사은)품이 누락된 경우 (단, 그 구성품이 훼손 없이 회수가 가능한 경우 제외<br/>

                5. 교환 / 반품은 배송 완료일로부터 7일 경과후 교환 접수 기간이 경과되어 교환이 어려운 점 양해 부탁드립니다.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            반품에 대한 회수는 얼마나 걸리나요?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                반품신청을 하신 후 영업일 기준 2-3일 이내 대한통운 기사님이 방문합니다. (라이프 스타일 및 입점사 경우 수거택배사가 일부 상이)
                택배사로 인계된 시점부터 1~2일(주말 및 공휴일 제외)후 상품 수령 예상되며,
                품이 물류센터로 입고 되면 평일기준 2~3일의 검수 확인 후 결제금액을 취소해드리겠습니다.    
                </p>
            </p>
        </li>
        <li className="w-2/5 ml-6">
            <p className="text-lg font-medium leading-6 text-gray-900">
            리미티드 상품을 교환/반품/환불하고 싶어요.
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                리미티드 제품은 한정된 수량으로 입고되는 제품으로,
                제품 특성상 교환 / 반품 / 환불이 어렵습니다.
                제품 불량 및 구성품 누락 등으로 교환 / 환불을 원하시는 경우,
                 1:1문의 또는 채널톡(https://naver.com) 로 문의 부탁드립니다.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            교환/반품/환불 접수에 대한 취소가 가능한가요?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                접수철회의 경우 한스타일 1:1문의 또는 채널톡(https://naver.com)으로 취소 접수 부탁드립니다.
                </p>
            </p>
        </li>
        <li className="w-2/5 ml-6">
            <p className="text-lg font-medium leading-6 text-gray-900">
            결제취소 이후 대금지급 소요일은 어떻게 되나요?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                [환불 관련 안내]<br/>
                1. 카드결제 : 승인 취소 처리 (반품완료일 기준 카드사 반영 4~5일 소요)<br/>
                2. 실시간 계좌이체: 초기 이체 계좌 (반품완료일 기준 은행 처리 2~3일 소요)<br/>
                3. 무통장입금: 환불계좌로 입금 (반품완료일 기준 은행 처리 3일 소요)<br/>
                </p>
            </p>
        </li>
    </ul>
</div>

    )
}

export default FAQ;