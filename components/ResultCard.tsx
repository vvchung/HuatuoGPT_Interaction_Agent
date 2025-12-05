import React from 'react';
import { AlertTriangle, CheckCircle2, FlaskConical, ScrollText, Activity, ShieldAlert } from 'lucide-react';
import { InteractionResult } from '../types';

interface ResultCardProps {
  data: InteractionResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ data }) => {
  if (data.error) {
    return (
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-amber-900">需要人工確認</h3>
          <p className="text-amber-700 mt-1">{data.error}</p>
        </div>
      </div>
    );
  }

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      case 'medium': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'low': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div className="bg-teal-600 p-4 flex items-center gap-3 text-white">
        <ScrollText className="w-5 h-5" />
        <h2 className="font-semibold text-lg">分析報告 (Analysis Report)</h2>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Drugs */}
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">Western Drug</div>
            <div className="text-lg font-bold text-blue-900 flex items-center gap-2">
              <FlaskConical className="w-5 h-5" />
              {data.western_drug}
            </div>
          </div>
          
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
            <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1">Chinese Herb</div>
            <div className="text-lg font-bold text-emerald-900 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {data.chinese_herb}
            </div>
          </div>
        </div>

        {/* Risk & Type */}
        <div className="space-y-4">
           <div className={`p-4 rounded-lg border flex flex-col justify-center h-full ${getRiskColor(data.clinical_risk)}`}>
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Clinical Risk</span>
              </div>
              <div className="text-2xl font-bold">{data.clinical_risk}</div>
           </div>
        </div>

        {/* Mechanism - Full Width */}
        <div className="md:col-span-2">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Mechanism Summary
            </h3>
            <p className="text-gray-800 leading-relaxed font-medium">
              {data.mechanism_summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                Type: {data.interaction_type}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                Evidence: {data.evidence_level}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;