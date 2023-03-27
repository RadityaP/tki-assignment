import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlayerAction } from '../../store/action/player';
import { gameAction } from '../../store/reducer/game';
import { headerAction } from '../../store/reducer/header';
import { shipAction } from '../../store/reducer/ship';
import './style.scss';

const ScreenRank = () => {
  const dispatch = useDispatch();
  const [sortedPlayer, setSortedPlayer] = useState([]);
  const { allPlayer } = useSelector((state) => state.player);

  useEffect(() => {
    const getData = async () => {
      dispatch(getAllPlayerAction());
    };

    getData();
  }, []);

  useEffect(() => {
    const sorted = allPlayer.slice().sort((firstItem, secondItem) => {
      return secondItem.stars - firstItem.stars || secondItem.time - firstItem.time;
    });

    setSortedPlayer(sorted.slice(0, 5));
  }, [allPlayer]);

  return (
    <div className="screen-container">
      <div className="title">
        Top 5 Rank
        <div className="rank">
          <table>
            <thead>
              <tr>
                <td>Rank</td>
                <td>Name</td>
                <td>Stars</td>
                <td>Time</td>
              </tr>
            </thead>
            <tbody>
              {sortedPlayer.map((item, index) => {
                return (
                  <tr key={index} className="item">
                    <td>
                      {index > 0
                        ? sortedPlayer[index].stars === sortedPlayer[index - 1].stars &&
                          sortedPlayer[index].time === sortedPlayer[index - 1].time
                          ? index
                          : index + 1
                        : index + 1}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.stars}</td>
                    <td>{item.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="start"
        onClick={() => {
          dispatch(gameAction.backToHomePage());
          dispatch(headerAction.resetCounter());
          dispatch(shipAction.setToInitialPosition());
        }}
      >
        Back To Start Page
      </div>
    </div>
  );
};

export default ScreenRank;
