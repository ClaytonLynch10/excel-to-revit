
import { useState } from 'react';
import { Upload, FileSpreadsheet, Eye, Plus, Settings, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import ExcelFileSelector from '@/components/ExcelFileSelector';
import DraftingViewPreview from '@/components/DraftingViewPreview';
import RibbonNavigation from '@/components/RibbonNavigation';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    toast({
      title: "Excel file selected",
      description: `${file.name} is ready for processing`,
    });
  };

  const handleCreateDraftingView = async () => {
    if (!selectedFile) return;
    
    setIsProcessing(true);
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Drafting view created successfully",
      description: `New drafting view created from ${selectedFile.name}`,
    });
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <RibbonNavigation />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <FileSpreadsheet className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Excel to Drafting View</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Import Excel files and automatically generate Revit drafting views with professional formatting
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Plus className="h-3 w-3 mr-1" />
              Revit Add-in
            </Badge>
            <Badge variant="outline">v1.0</Badge>
          </div>
        </div>

        <Tabs defaultValue="import" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="import" className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Import</span>
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="import" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileSpreadsheet className="h-5 w-5 text-blue-600" />
                    <span>Select Excel File</span>
                  </CardTitle>
                  <CardDescription>
                    Choose an Excel file (.xlsx, .xls) to import into Revit as a drafting view
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ExcelFileSelector onFileSelect={handleFileSelect} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-green-600" />
                    <span>File Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedFile ? (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">File Name:</span>
                        <span className="text-gray-600">{selectedFile.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">File Size:</span>
                        <span className="text-gray-600">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">File Type:</span>
                        <span className="text-gray-600">{selectedFile.type}</span>
                      </div>
                      <Button 
                        onClick={handleCreateDraftingView}
                        disabled={isProcessing}
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      >
                        {isProcessing ? 'Creating Drafting View...' : 'Create Drafting View'}
                      </Button>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      No file selected. Please choose an Excel file to see its information.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <DraftingViewPreview selectedFile={selectedFile} />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Import Settings</CardTitle>
                <CardDescription>
                  Configure how Excel data is imported into Revit drafting views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Scale Factor</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>1:1</option>
                        <option>1:2</option>
                        <option>1:4</option>
                        <option>1:10</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Text Size</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>2.5mm</option>
                        <option>3.5mm</option>
                        <option>5mm</option>
                        <option>7mm</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="borders" className="rounded" />
                    <label htmlFor="borders" className="text-sm">Include cell borders</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="colors" className="rounded" />
                    <label htmlFor="colors" className="text-sm">Preserve cell colors</label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
