import React from 'react';
import { FileText, Sparkles, Play } from 'lucide-react';
import { SAMPLE_ABSTRACT } from '../constants';

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ input, setInput, onAnalyze, isLoading }) => {
  
  const handleLoadExample = () => {
    setInput(SAMPLE_ABSTRACT);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-teal-600" />
          <h2 className="font-semibold text-gray-700">文獻摘要輸入 (Input)</h2>
        </div>
        <button 
          onClick={handleLoadExample}
          className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 px-3 py-1 rounded-md hover:bg-teal-50 transition-colors"
          disabled={isLoading}
        >
          <Sparkles className="w-3 h-3" />
          載入範例 (Warfarin/Danshen)
        </button>
      </div>
      
      <div className="p-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="請在此貼上 PubMed 摘要或全文段落..."
          className="w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none text-gray-700 font-mono text-sm leading-relaxed"
          disabled={isLoading}
        />
        
        <div className="mt-4 flex justify-end">
          <button
            onClick={onAnalyze}
            disabled={!input.trim() || isLoading}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-white shadow-sm transition-all
              ${!input.trim() || isLoading 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-teal-600 hover:bg-teal-700 hover:shadow-md active:transform active:scale-95'}
            `}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>分析中 (Analyzing)...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>開始提取 (Extract)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSection;