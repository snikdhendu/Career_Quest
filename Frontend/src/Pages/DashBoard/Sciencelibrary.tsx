import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, { MiniMap, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Science' },
    style: { backgroundColor: '#4CAF50', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '2',
    position: { x: -300, y: 150 },
    data: { label: 'Engineering' },
    style: { backgroundColor: '#2196F3', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '3',
    position: { x: 0, y: 150 },
    data: { label: 'Medical' },
    style: { backgroundColor: '#FFC107', color: '#333', border: '2px solid #333' },
  },
  {
    id: '4',
    position: { x: 300, y: 150 },
    data: { label: 'Astronomer' },
    style: { backgroundColor: '#9C27B0', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '5',
    position: { x: -300, y: 300 },
    data: { label: 'Physicist' },
    style: { backgroundColor: '#FF5722', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '6',
    position: { x: 300, y: 300 },
    data: { label: 'Environmental Scientist' },
    style: { backgroundColor: '#795548', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '7',
    position: { x: -500, y: 300 },
    data: { label: 'Civil Engineer' },
    style: { backgroundColor: '#00BCD4', color: '#f1f1f1', border: '2px solid #333' },
  },
  {
    id: '8',
    position: { x: -300, y: 450 },
    data: { label: 'Mechanical Engineer' },
    style: { backgroundColor: '#607D8B', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '9',
    position: { x: 0, y: 450 },
    data: { label: 'Doctor' },
    style: { backgroundColor: '#673AB7', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '10',
    position: { x: 300, y: 450 },
    data: { label: 'Surgeon' },
    style: { backgroundColor: '#E91E63', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '11',
    position: { x: -500, y: 450 },
    data: { label: 'Electrical Engineer' },
    style: { backgroundColor: '#CDDC39', color: '#333', border: '2px solid #333' }, 
  },
  {
    id: '12',
    position: { x: 500, y: 150 },
    data: { label: 'B.Sc in Physics' },
    style: { backgroundColor: '#FFEB3B', color: '#333', border: '2px solid #333' }, 
  },
  {
    id: '13',
    position: { x: 500, y: 300 },
    data: { label: 'B.Sc in Chemistry' },
    style: { backgroundColor: '#F44336', color: '#f1f1f1', border: '2px solid #333' }, 
  },
  {
    id: '14',
    position: { x: 500, y: 450 },
    data: { label: 'B.Sc in Biology' },
    style: { backgroundColor: '#3F51B5', color: '#f1f1f1', border: '2px solid #333' }, 
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep' },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
  { id: 'e1-6', source: '1', target: '6', type: 'smoothstep' },
  { id: 'e2-7', source: '2', target: '7', type: 'smoothstep' },
  { id: 'e2-8', source: '2', target: '8', type: 'smoothstep' },
  { id: 'e3-9', source: '3', target: '9', type: 'smoothstep' },
  { id: 'e3-10', source: '3', target: '10', type: 'smoothstep' },
  { id: 'e2-11', source: '2', target: '11', type: 'smoothstep' },
  { id: 'e1-12', source: '1', target: '12', type: 'smoothstep' },
  { id: 'e1-13', source: '1', target: '13', type: 'smoothstep' },
  { id: 'e1-14', source: '1', target: '14', type: 'smoothstep' },
];



const Sciencelibrary = () => {
  const navigate = useNavigate(); 
  const [visibleNodes, setVisibleNodes] = useState<string[]>([]);

  useEffect(() => {
    const showNodes = () => {
      const nodeLevels = [
        ['1'],
        ['2', '3', '4'],
        ['5', '6', '7', '8'],
        ['9', '10', '11'],
        ['12', '13', '14'],
      ];

      nodeLevels.forEach((levelNodes, index) => {
        setTimeout(() => {
          setVisibleNodes((prev) => [...prev, ...levelNodes]);
        }, index * 1000); 
      });
    };

    showNodes();
  }, []);

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: any) => {
      if (node.id === '2') {
        navigate('/courses/');
      }
    },
    [navigate]
  );

  return (
    <div className="h-screen w-screen bg-cover bg-fixed" style={{ backgroundImage: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)' }}>
      <div className="h-full w-full border-0 rounded-lg">
        <ReactFlow
          nodes={initialNodes.filter(node => visibleNodes.includes(node.id))}
          edges={initialEdges}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          onNodeClick={onNodeClick}
          panOnDrag={true}
          zoomOnScroll={true}
          zoomOnPinch={true}
          zoomOnDoubleClick={true}
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Sciencelibrary;
