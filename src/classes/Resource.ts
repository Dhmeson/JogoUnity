type ResourceName = 'Wood' | 'Stone' | 'MetalResource' | 'Food';
class Resource {
  private _name: ResourceName;
  private _quantity: number;

  constructor(name: ResourceName) {
    this._name = name;
    this._quantity = 0;
  }

  get name(): string {
    return this._name;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(newQuantity: number) {
    this._quantity = newQuantity;
  }

  addQuantity(qty: number): void {
    this._quantity += qty;
    console.log(`${qty} ${this._name}(s) added. Total: ${this._quantity}`);
  }

  // Add common methods or properties for all resources if needed
}
