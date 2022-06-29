import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/plan.css';
import PlaceItem from './PlaceItem';

const Plan = () => {
  // redux에서 변수 얻기
  // const dispatch = useDispatch();
  const days = useSelector(state => state.planner.days);
  const startDate = useSelector(state => state.planner.startDate);
  const endDate = useSelector(state => state.planner.endDate);
  const areaCode = useSelector(state => state.planner.areaCode);
  const sigunguCode = useSelector(state => state.planner.sigunguCode);
  const plan = useSelector(state => state.planner.plan);

  // console.log(plan);

  const navigate = useNavigate();

  // TODO: day 별로 일정 저장할 배열 필요..(전역 변수)

  return (
    <div id='plan'>
      <h3>나의 부산 여행</h3>
      <h5>{startDate} ~ {endDate} ({days}일)</h5>
      {
        // days 만큼 반복문 돌리기
        [...Array(days)].map((day, index) => (
          <div key={index + 1} className='day'>
            <span>DAY {index + 1}</span>
            <div>
              <div>
                {
                  plan[index] && plan[index].map((place, index) => (
                    <div className='place-list-item'>
                      <PlaceItem place={place} key={index}/>
                    </div>
                  ))
                }
              </div>
              <button type='button' className='btn btn-outline-primary btn-sm' onClick={() => {
                navigate(`/plan/${index + 1}`);
              }}>장소 추가</button>
              <button type='button' className='btn btn-outline-secondary btn-sm'>메모 추가</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Plan;