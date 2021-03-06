jest.unmock('../updateMap');

import { SagaCancellationException } from 'redux-saga';
import { createMockTask } from 'redux-saga/utils';

import * as actions from '../../actions';
import { geocode } from '../../../common/helpers/photon';
import delay from '../../../common/helpers/delayPromise';
import Node from '../../../common/models/Node';
import cancelUpdateMap, { updateMap, debounceUpdateMap } from '../updateMap';

describe('cancelUpdateMap', () => {
  it('fork debounceUpdateMap and cancel it when the marker was moved', () => {
    const gen = cancelUpdateMap();

    expect(gen.next())
      .toFork(debounceUpdateMap);

    const debounceUpdateMapTask = createMockTask();

    expect(gen.next(debounceUpdateMapTask))
      .toTake(actions.MARKER_MOVED);

    expect(gen.next())
      .toCancel(debounceUpdateMapTask);

    expect(gen.next().done)
      .toBe(true);
  });
});

describe('updateMap', () => {
  let gen;
  let node;

  beforeEach(() => {
    node = new Node();
    gen = updateMap(node);
  });

  it('delays execution, geocodes address and changes node position', () => {
    expect(gen.next())
      .toPut(actions.loadNodeCenter(true));

    expect(gen.next())
      .toCall(delay, 300);

    expect(gen.next())
      .toCall([ node, node.address ]);

    const address = 'Node address';

    expect(gen.next(address))
      .toCall(geocode, address);

    const center = {
      lat: 14.5,
      lon: 13.5
    };

    const feature = {
      geometry: {
        coordinates: [ center.lon, center.lat ]
      }
    };

    expect(gen.next(feature))
      .toPut(actions.changeMapCenter(center));

    expect(gen.next())
      .toCall([ node, node.merge ], center);

    node = new Node();

    expect(gen.next(node))
      .toPut(actions.changeNode(node));

    expect(gen.next())
      .toPut(actions.loadNodeCenter(false));

    expect(gen.next().done)
      .toBe(true);
  });

  it('delays execution, geocodes address and stops if no feature was found', () => {
    expect(gen.next())
      .toPut(actions.loadNodeCenter(true));

    expect(gen.next())
      .toCall(delay, 300);

    expect(gen.next())
      .toCall([ node, node.address ]);

    const address = 'Node address';

    expect(gen.next(address))
      .toCall(geocode, address);

    const feature = undefined;

    expect(gen.next(feature).done)
      .toBe(true);
  });

  it('can be canceled', () => {
    expect(gen.next())
      .toPut(actions.loadNodeCenter(true));

    expect(gen.next())
      .toCall(delay, 300);

    const error = new SagaCancellationException();

    expect(gen.throw(error).done)
      .toBe(true);
  });
});

describe('debounceUpdateMap', () => {
  let gen;

  beforeEach(() => {
    gen = debounceUpdateMap();
  });

  it('forks the updateMap saga and cancels it on second iteration', () => {
    expect(gen.next())
      .toTake(actions.CHANGE_NODE_ADDRESS);

    let node = new Node();

    expect(gen.next(actions.changeNodeAddress(node)))
      .toFork(updateMap, node);

    let updateMapTask = createMockTask();

    expect(gen.next(updateMapTask))
      .toTake(actions.CHANGE_NODE_ADDRESS);

    node = new Node();

    expect(gen.next(actions.changeNodeAddress(node)))
      .toCancel(updateMapTask);

    updateMapTask = createMockTask();

    expect(gen.next(updateMapTask))
      .toFork(updateMap, node);

    expect(gen.next())
      .toTake(actions.CHANGE_NODE_ADDRESS);
  });

  it('can be canceled', () => {
    expect(gen.next())
      .toTake(actions.CHANGE_NODE_ADDRESS);

    const error = new SagaCancellationException();

    expect(gen.throw(error).done)
      .toBe(true);
  });
});
