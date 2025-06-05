
import { FileSpreadsheet, Home, Edit, View, Settings, Help } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const RibbonNavigation = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        {/* App Title Bar */}
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <FileSpreadsheet className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-gray-900">Excel to Drafting View Add-in</span>
          </div>
          <div className="text-sm text-gray-500">
            Autodesk Revit 2024
          </div>
        </div>

        {/* Ribbon Tabs */}
        <div className="flex items-center space-x-8 py-3">
          <Button variant="ghost" className="flex items-center space-x-2 text-blue-600 bg-blue-50">
            <Home className="h-4 w-4" />
            <span className="font-medium">Import</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Edit className="h-4 w-4" />
            <span>Format</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <View className="h-4 w-4" />
            <span>View</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" className="flex items-center space-x-2">
            <Help className="h-4 w-4" />
            <span>Help</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RibbonNavigation;
