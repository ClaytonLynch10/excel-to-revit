
import { FileSpreadsheet, Grid, Ruler, Type } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DraftingViewPreviewProps {
  selectedFile: File | null;
}

const DraftingViewPreview = ({ selectedFile }: DraftingViewPreviewProps) => {
  if (!selectedFile) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileSpreadsheet className="h-5 w-5 text-gray-400" />
            <span>Drafting View Preview</span>
          </CardTitle>
          <CardDescription>
            Select an Excel file to see a preview of the generated drafting view
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FileSpreadsheet className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No file selected for preview</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileSpreadsheet className="h-5 w-5 text-blue-600" />
            <span>Drafting View Preview</span>
          </CardTitle>
          <CardDescription>
            Preview of how {selectedFile.name} will appear in Revit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white border rounded-lg p-6 shadow-inner">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Sample Excel Data Preview</h3>
              <div className="flex space-x-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Grid className="h-3 w-3" />
                  <span>Grid</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Ruler className="h-3 w-3" />
                  <span>1:1</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Type className="h-3 w-3" />
                  <span>3.5mm</span>
                </Badge>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-r border-gray-200">Item</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-r border-gray-200">Description</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-r border-gray-200">Quantity</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">001</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">Concrete Foundation</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">25.5</td>
                    <td className="px-4 py-2 text-sm text-gray-900">m³</td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">002</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">Steel Reinforcement</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">1,250</td>
                    <td className="px-4 py-2 text-sm text-gray-900">kg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">003</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">Brick Wall</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">180</td>
                    <td className="px-4 py-2 text-sm text-gray-900">m²</td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">004</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">Windows</td>
                    <td className="px-4 py-2 text-sm text-gray-900 border-r border-gray-200">12</td>
                    <td className="px-4 py-2 text-sm text-gray-900">pcs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              * This is a sample preview. Actual data will be imported from your Excel file.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DraftingViewPreview;
